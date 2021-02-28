import json
from flask import request, jsonify, g
from eazypay.models import CurrentProjects, Employer, Freelancer, db
from eazypay import app
import datetime
from datetime import timedelta
from block import getAccountBalance, callconstructor, transferMoneyToFreelancer, addFreelancerToContract, transferMoneyToFamilyMember, contract, transaction

# Frontend Routes


@app.route('/', methods=["GET", "POST"])
def catch():
    return app.send_static_file('index.html')


@app.route('/employeePage', methods=["GET", "POST"])
def catch_employee():
    return app.send_static_file('index.html')


@app.route('/employerPage', methods=["GET", "POST"])
def catch_employer():
    return app.send_static_file('index.html')


@app.route('/login-page-f', methods=["GET", "POST"])
def catch_login_freelancer():
    return app.send_static_file('index.html')


@app.route('/login-page-e', methods=["GET", "POST"])
def catch_login_employer():
    return app.send_static_file('index.html')


@app.route('/register-page-e', methods=["GET", "POST"])
def catch_employer_register():
    return app.send_static_file('index.html')


@app.route('/register-page-f', methods=["GET", "POST"])
def catch_freelancer_register():
    return app.send_static_file('index.html')


# Backend Routes

@app.route('/backend/empprofile', methods=["POST", "GET"])
def employer_profile():
    content = request.get_json()
    name = content["name"]
    email = content["email"]
    address = content["address"]
    uid = content["uid"]

    emp = Employer(name=name, email=email, address=address, uid=uid)
    db.session.add(emp)
    db.session.commit()
    return 'New employer added', 200


@app.route('/backend/freeprofile', methods=["POST", "GET"])
def freelancer_profile():
    content = request.get_json()
    name = content["name"]
    email = content["email"]
    address = content["address"]
    uid = content["uid"]

    free = Freelancer(name=name, email=email, address=address, uid=uid)

    db.session.add(free)
    db.session.commit()

    return 'New freelancer added', 200


@app.route('/backend/freelogin', methods=["POST", "GET"])
def freelancer_login():
    content = request.get_json()
    email = content["email"]
    uid = content["uid"]

    free = Freelancer.query.filter(Freelancer.uid == uid).first()

    address = free.address
    current_balance = getAccountBalance(address)

    List = []
    Dict = {
        'name': free.name,
        'email': free.email,
        'current_balance': current_balance
    }
    List.append(Dict)

    return json.dumps(List)


@app.route('/backend/emplogin', methods=["POST", "GET"])
def employer_login():
    content = request.get_json()
    email = content["email"]
    uid = content["uid"]

    emp = Employer.query.filter(
        Employer.email == email, Employer.uid == uid).first()

    emp_address = emp.address
    current_balance = getAccountBalance(emp_address)

    List = []
    Dict = {
        'name': emp.name,
        'email': email,
        'current_balance': current_balance
    }
    List.append(Dict)

    return json.dumps(List)


@app.route('/backend/freeworking', methods=["GET", "POST"])
def freelancer_working():
    content = request.get_json()
    emp_email = content["email"]
    uid = content["uid"]

    emp = Employer.query.filter(Employer.uid == uid).first()
    emp_address = emp.address

    current_balance = getAccountBalance(emp_address)
    current_balance = current_balance/(10**18)

    rows = CurrentProjects.query.filter(
        CurrentProjects.emp_email == emp_email).all()

    List = []
    Dict = {}

    Dict = {
        'name': emp.name,
        'email': emp_email,
        'current_balance': current_balance
    }
    List.append(Dict)

    for row in rows:
        Dict = {
            'sno': row.sno,
            'free_name': row.free_name,
            'free_email': row.free_email,
            'project': row.project,
            'date_started': row.date_started,
            'deadline': row.deadline,
            'days_hours_work': row.days_hours_work,
            'rate_day_hour': row.rate_day_hour,
            'rate_for_leave_deduct': row.rate_for_leave_deduct,
            'proposed_amount': row.proposed_amount
        }
        List.append(Dict)

    return json.dumps(List)

# Done!!!!


@app.route('/backend/freepayment', methods=["GET", "POST"])
def freelancer_payment():
    try:
        content = request.get_json()
        sno = content["sno"]
        no_of_leaves = content["no_of_leaves"]
        amount_paid = content["amount_paid"]
        private_key = content["private_key"]

        row = CurrentProjects.query.filter(CurrentProjects.sno == sno).first()

        hex_tr = transaction(row.emp_address, row.free_address, private_key, amount_paid)

        Dict = {'hex': hex_tr}
        List = []
        List.append(Dict)

        db.session.delete(row)
        db.session.commit()

        return json.dumps(List)

    except:
        return 'Payment Unsuccessful', 400


@app.route('/backend/addproject', methods=["POST", "GET"])
def add_project():
    content = request.get_json()
    emp_name = content["emp_name"]
    emp_email = content["emp_email"]
    free_name = content["free_name"]
    free_email = content["free_email"]
    project = content["project"]
    date_started = content["date_started"]
    deadline = content["deadline"]
    no_days_hours = content["no_days_hours"]
    rate_day_hour = content["rate_day_hour"]
    proposed_amount = content["proposed_amount"]
    rate_for_leave_deduct = content["rate_for_leave_deduct"]
    private_key = content["private_key"]
    free_address = content["free_address"]

    emp = Employer.query.filter(Employer.email == emp_email).first()
    emp_address = emp.address

    proj = CurrentProjects(emp_name=emp_name, emp_email=emp_email, free_name=free_name, free_email=free_email,
                           project=project, date_started=date_started, deadline=deadline,
                           days_hours_work=no_days_hours, rate_day_hour=rate_day_hour,
                           proposed_amount=proposed_amount, rate_for_leave_deduct=rate_for_leave_deduct,
                           emp_address=emp_address, free_address=free_address)

    callconstructor(rate_day_hour, no_days_hours,
                    rate_for_leave_deduct)

    contract.functions.setVals(
        int(rate_day_hour), int(no_days_hours), int(rate_for_leave_deduct)).transact()

    db.session.add(proj)
    db.session.commit()

    return "Project Added Successfully", 200


@app.route('/backend/projectworking', methods=["GET", "POST"])
def project_working():
    content = request.get_json()

    free_email = content["email"]
    uid = content["uid"]

    free = Freelancer.query.filter(Freelancer.uid == uid).first()

    address = free.address
    current_balance = getAccountBalance(address)
    current_balance = current_balance/(10**18)

    List = []
    Dict = {}

    Dict = {
        'name': free.name,
        'email': free.email,
        'current_balance': current_balance
    }
    List.append(Dict)

    rows = CurrentProjects.query.filter(
        CurrentProjects.free_email == free_email).all()

    for row in rows:
        Dict = {
            'sno': row.sno,
            'emp_name': row.emp_name,
            'emp_email': row.emp_email,
            'project': row.project,
            'date_started': row.date_started,
            'deadline': row.deadline,
            'days_hours_work': row.days_hours_work,
            'rate_day_hour': row.rate_day_hour,
            'proposed_amount': row.proposed_amount
        }
        List.append(Dict)

    return json.dumps(List)


@app.route('/backend/transfer', methods=["GET", "POST"])
def transfer():
    try:
        content = request.get_json()
        name = content["name"]
        free_address = content["sendersAddress"]
        amount = content["amount"]
        address = content["address"]
        private_key = content["private_key"]

        hex_tr = transaction(free_address, address, private_key, amount)

        Dict = {'hex': hex_tr}
        List = []
        List.append(Dict)

        return json.dumps(List)
    except:
        return 'Payment Unsuccessful', 400

@app.route('/backend/freeproject', methods=["GET", "POST"])
def freelancer_project():
    content = request.get_json()
    free_email = content["email"]

    rows = CurrentProjects.query.filter(
        CurrentProjects.free_email == free_email).all()

    List = []

    for row in rows:
        Dict = {
            'sno': row.sno,
            'emp_name': row.emp_name,
            'emp_email': row.emp_email,
            'project': row.project,
            'date_started': row.date_started,
            'deadline': row.deadline,
            'days_hours_work': row.days_hours_work,
            'rate_day_hour': row.rate_day_hour,
            'proposed_amount': row.proposed_amount
        }
        List.append(Dict)

    return json.dumps(List)