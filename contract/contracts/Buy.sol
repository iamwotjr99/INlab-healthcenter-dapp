// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Buy {
    uint public amount = 1 ether;

    function send(address payable _recAddr) payable public {
        require(msg.value >= amount);
        _recAddr.transfer(msg.value);
    }
}