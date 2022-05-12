// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Buy {
    address private owner;
    mapping (address => uint) accountBalance;

    struct transferStruct {
        address sender;
        address receiver;
        uint amount;
    }

    constructor() {
        owner = msg.sender;
        accountBalance[tx.origin] = msg.sender.balance;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function sendMoney(address payable receiver) payable public returns(bool success) {
        if(accountBalance[owner] < msg.value ) {
            return false;
        }
        
        receiver.transfer(msg.value);
        return true;
    }

    function getBalance(address addr) public view returns(uint) {
        return accountBalance[addr];
    }

    function getMyBal() public view returns(uint) {
        return msg.sender.balance;
    }

}

// pragma solidity >=0.4.22 <0.9.0;

// contract Buy {
//     uint public amount = 1 ether;

//     function send(address payable _recAddr) payable public {
//         require(msg.value >= amount);
//         _recAddr.transfer(amount);
//     }
// }