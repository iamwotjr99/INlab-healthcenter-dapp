export const CONTRACT_ADDRESS = "0x8D5C414aab0480C8912171D52D17C9495CbfCE00"

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
        "components": [
          {
            "internalType": "address",
            "name": "patAddr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "age",
            "type": "string"
          }
        ],
        "internalType": "struct HealthCare.Patient[]",
        "name": "",
        "type": "tuple[]"
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
        "components": [
          {
            "internalType": "address",
            "name": "patientAddr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "patientName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "patientAge",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "patientWeight",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "patientHeight",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symptom",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "state",
            "type": "uint256"
          }
        ],
        "internalType": "struct HealthCare.MedicalForm",
        "name": "",
        "type": "tuple"
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
    "name": "updatePatientData",
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
      }
    ],
    "name": "deletePatientData",
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
    "inputs": [],
    "name": "getPatientList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "patAddr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "age",
            "type": "string"
          }
        ],
        "internalType": "struct HealthCare.Patient[]",
        "name": "",
        "type": "tuple[]"
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
        "name": "_patAddr",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_age",
        "type": "string"
      }
    ],
    "name": "addPatient",
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
      }
    ],
    "name": "readPatientTreats",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "patientAddr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "patientName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "patientAge",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "patientWeight",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "patientHeight",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symptom",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "state",
            "type": "uint256"
          }
        ],
        "internalType": "struct HealthCare.MedicalForm[]",
        "name": "",
        "type": "tuple[]"
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