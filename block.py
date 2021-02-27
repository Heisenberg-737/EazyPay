import json
from web3 import Web3
ganache_url = "HTTP://127.0.0.1:7545"
web3 = Web3(Web3.HTTPProvider(ganache_url))

MaxDuration = 1
HourlyPay = 2
PenaltyPerHour = 3


def callconstructor(hourlypay, maxDuration, penaltyperhour):
    global HourlyPay
    global MaxDuration
    global PenaltyPerHour
    HourlyPay = hourlypay
    MaxDuration = maxDuration
    PenaltyPerHour = penaltyperhour


web3.eth.defaultAccount = web3.eth.accounts[0]

abi = json.loads('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"company","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freelancer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_freelancer","type":"address"}],"name":"getFreelancer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_delay","type":"uint256"}],"name":"paySalary","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_hourlyPay","type":"uint256"},{"internalType":"uint256","name":"_maxDuration","type":"uint256"},{"internalType":"uint256","name":"_penaltyPerHour","type":"uint256"}],"name":"setVals","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
address = web3.toChecksumAddress('0x520A600EbFF0c5cBf81b5341a69e0210618d8Df4')
contract = web3.eth.contract(address=address, abi=abi)


def transaction(account1, account2, privateKey, money):
    nonce = web3.eth.getTransactionCount(account1)
    tx = {
        'nonce': nonce,
        'to': account2,
        'value': web3.toWei(money, 'ether'),
        'gas': 2000000,
        'gasPrice': web3.toWei('50', 'gwei'),
    }
    signed_tx = web3.eth.account.signTransaction(tx, privateKey)
    tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
    return web3.toHex(tx_hash)
#   print(web3.toHex(tx_hash))


def transferMoneyToFreelancer(companyAddress, freelancerAddress, privateKey, delay):
    amountToPay = contract.functions.paySalary(delay).call()
    transaction(companyAddress, freelancerAddress, privateKey, amountToPay)


def transferMoneyToFamilyMember(freelancerAddress, familyMemberAddress, privateKey, amount):
    transaction(freelancerAddress, familyMemberAddress, privateKey, amount)


def getAccountBalance(address):
    return web3.eth.getBalance(address)


def addFreelancerToContract(freelancerAddress):
    contract.functions.getFreelancer(web3.toChecksumAddress(freelancerAddress))


def getContractBalance():
    return contract.functions.getBalance().call()


# constructorMade = contract.functions.setVals(
#     HourlyPay, MaxDuration, PenaltyPerHour).transact()
