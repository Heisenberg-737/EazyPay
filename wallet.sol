pragma solidity >=0.4.25 <0.9.0;

contract Payroll{
    
    address public company;
    address public freelancer;
    
    uint balance;
    uint hourlyPay;
    uint maxDuration;
    uint penaltyPerHour;
    
    constructor(uint _hourlyPay,uint _maxDuration,uint _penaltyPerHour) public{
        company=msg.sender;
        maxDuration=_maxDuration;
        hourlyPay=_hourlyPay;
        penaltyPerHour=_penaltyPerHour;
        balance=100;
    }
    
    function getFreelancer(address _freelancer) public{
        freelancer=_freelancer;
    }
    
    function getBalance() view public returns(uint){
        return balance;
    }
    
    function paySalary(uint _delay) public returns(uint){
        balance=balance-(hourlyPay*maxDuration-penaltyPerHour*_delay);
        return hourlyPay*maxDuration-penaltyPerHour*_delay;
    }
    
}