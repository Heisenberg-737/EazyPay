from eazypay import db


class CurrentProjects(db.Model):
    __tablename__ = 'current_projects'
    sno = db.Column(db.Integer, primary_key=True, autoincrement=True)
    emp_name = db.Column(db.String(100))
    emp_email = db.Column(db.String(100))
    free_name = db.Column(db.String(100))
    free_email = db.Column(db.String(100))
    project = db.Column(db.String(500))
    date_started = db.Column(db.String(100))
    deadline = db.Column(db.String(100))
    days_hours_work = db.Column(db.String(100))
    rate_day_hour = db.Column(db.String(100))
    proposed_amount = db.Column(db.String(100))
    rate_for_leave_deduct = db.Column(db.String(100))
    emp_address = db.Column(db.String(100))
    free_address = db.Column(db.String(100))


class Transaction(db.Model):
    __tablename__ = 'Transactions'
    sno = db.Column(db.Integer, primary_key=True, autoincrement=True)
    emp_name = db.Column(db.String(100))
    emp_email = db.Column(db.String(100))
    free_name = db.Column(db.String(100))
    free_email = db.Column(db.String(100))
    project = db.Column(db.String(500))
    date_started = db.Column(db.String(100))
    deadline = db.Column(db.String(100))
    days_hours_work = db.Column(db.String(100))
    rate_day_hour = db.Column(db.String(100))
    proposed_amount = db.Column(db.String(100))
    no_of_leaves = db.Column(db.String(100))
    rate_for_leave_deduct = db.Column(db.String(100))
    amount_paid = db.Column(db.String(100))
    emp_address = db.Column(db.String(100))
    free_address = db.Column(db.String(100))


class Employer(db.Model):
    __bind_key__ = 'users'
    __tablename__ = 'EmployersTable'
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), primary_key=True)
    address = db.Column(db.String(100))
    uid = db.Column(db.String(100))


class Freelancer(db.Model):
    __bind_key__ = 'users'
    __tablename__ = 'FreelancersTable'
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), primary_key=True)
    address = db.Column(db.String(100))
    uid = db.Column(db.String(100))
