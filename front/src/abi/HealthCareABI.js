export const CONTRACT_ADDRESS = "0xC544017356CD91456692A0983406877E8C59b242"

export const HEALTH_CARE_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "doctorAddr",
        "type": "address"
      }
    ],
    "name": "DoctorAdd",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "doctorAddr",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_hospital",
        "type": "string"
      }
    ],
    "name": "addDoctor",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_patientAddr",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_patientName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_patientAge",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_patientWeight",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_patientHeight",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symptom",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "addPatientData",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_patientAddr",
        "type": "address"
      }
    ],
    "name": "readPatientData",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddr",
        "type": "address"
      }
    ],
    "name": "getUser",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]