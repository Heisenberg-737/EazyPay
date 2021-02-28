Title - EazyPay

Description- 
EazyPay is a payment gateway based on blockchain technology that ensures easy & smooth transfer of money from employer/company to the freelancer as well as from the freelancer to his/her family members without any delay. 

Tech Stack- 

Languages used-HTML,CSS,JS,Python,SQL 
Frontend- 
We developed a Responsive Application with high caching using ReactJs library with the Hooks interface. We have also added animations to make the platform look more interactive & user-friendly. We have also used some of the npm packages in order to add more functionality to our project. \

Backend- 
The backend is built on Python's Flask framework. We made use of the SQLite database. We connected ReactJS to Flask and SQLite using the Axios bundle in the Node Library. We also used the web3 library to connect our smart contract with our actual application which made use of languages like Js & Python. \

Blockchain- 
We made use of the solidity language to write the smart contract & the Ganache local blockchain network for testing purposes and we have deployed the smart contract on the Ethereum network 

Libraries & dependencies-ReactJS,web3,Axios, Flask, Flask-SQLAlchemy \

Installation steps- 
BLOCKCHAIN:- 
Download ganache from https://www.trufflesuite.com/ganache this will act as the local blockchain node, with trial accounts that are pre-funded with ether. Note that any actual transactions in a blockchain will cost a gas fee, which costs ether, which in turn costs real money.
To program smart contract Remix ide was used(https://remix.ethereum.org/), the smart contracts will be made using the solidity programming language Download web3 python library by typing "pip install web3" in the terminal or the command line. This will enable communication between our smart contract and our Flask backend. \
FRONTEND:-
Use npm install to install all the dependencies. Use npm start on the terminal to start the localhost. \
BACKEND:-
Firstly, setup a virtual environment on the system using py -m venv env on windows and python3 -m venv env on linux/macOS. To activate the virtual environment, use .\env\Scripts\activate on windows and source env/bin/activate on linux/macOS. Then pip install flask, flask-sqlalchemy. Then user python app.py on the terminal while on the root directory to start the backend server simultaneously running npm start on another terminal. \

System design implementation. \
The employer/company initially draws up the terms of the smart contract such as the duration of the contract, the pay per hour, the penalty which is charged in case of any delay, etc. Based on these values, the pay of the freelancer is automatically calculated by the smart contract and the respective payment is made to the freelancer. The amount which remains as a result of the deduction is transferred back to the company. \
Our platform also allows the freelancer to check their account balance and send money to family members. All he needs to do is enter the address of the beneficiary as well as the smart key and the money will be automatically deducted from the freelancer’s account and sent to the other beneficiary’s account.
