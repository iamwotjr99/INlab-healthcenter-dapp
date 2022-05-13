// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HealthCare {
    struct Doctor {
        address docAddr;
        string hospital;
    }

    struct MedicalForm {
        string patient;
        string symptom;
        string description;
    }

    mapping(address => uint) authCaller;
    mapping(address => string) userType;
    mapping(address => Doctor) docData;

    constructor() public {
        authCaller[msg.sender] = 1;
    }

    // event
    event DoctorAdd(address doctorAddr);

    function addDoctor(address doctorAddr) public returns(bool) {
        require(keccak256(abi.encodePacked(userType[msg.sender]))
        == keccak256(abi.encodePacked("")));

        userType[msg.sender] = 'doctor';
        docData[msg.sender].docAddr = doctorAddr;
        emit DoctorAdd(msg.sender);
        return true;
    }
}