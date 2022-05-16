// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HealthCare {

    mapping(address => uint) authCaller;
    mapping(address => string) userType;
    mapping(address => Doctor) docData;
    mapping(address => MedicalForm) mediData;

    constructor() public {
        authCaller[msg.sender] = 1;
    }

    struct Doctor {
        address docAddr;
        string hospital;
    }

    struct MedicalForm {
        address patientAddr;
        string patientName;
        string patientAge;
        string patientWeight;
        string patientHeight;
        string symptom;
        string description;
    }

    // event
    event DoctorAdd(address doctorAddr);
    
    // * Doctor *
    function addDoctor(address doctorAddr, string memory _hospital) public returns(bool) {
        require(keccak256(abi.encodePacked(userType[msg.sender]))
        == keccak256(abi.encodePacked("")));

        userType[msg.sender] = 'doctor';
        docData[msg.sender].docAddr = doctorAddr;
        docData[msg.sender].hospital = _hospital;
        emit DoctorAdd(msg.sender);
        return true;
    }

    function addPatientData(address _patientAddr, string memory _patientName, string memory _patientAge,
    string memory _patientWeight, string memory _patientHeight, string memory _symptom, string memory _description) 
    public returns(string memory) {
        require(keccak256(abi.encodePacked(userType[msg.sender]))
        == keccak256(abi.encodePacked("doctor")));

        mediData[_patientAddr].patientAddr = _patientAddr;
        mediData[_patientAddr].patientName = _patientName;
        mediData[_patientAddr].patientAge = _patientAge;
        mediData[_patientAddr].patientWeight = _patientWeight;
        mediData[_patientAddr].patientHeight = _patientHeight;
        mediData[_patientAddr].symptom = _symptom;
        mediData[_patientAddr].description = _description;
    
        return mediData[_patientAddr].patientName;
    }

    // get User
    function getUser(address userAddr) view public returns(string memory) {
        return userType[userAddr];
    }
}