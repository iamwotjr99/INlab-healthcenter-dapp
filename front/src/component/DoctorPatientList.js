import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import {HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../abi/HealthCareABI';
function DoctorPatientList() {

    const [patienList, setPaientList] = useState([]);

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            const result = await contract.methods.getPatientList().call();
            console.log(result);
            setPaientList(result);
        }

        init();
    }, [])
    return (
        <div className="doctor_patient_list">
            <h1>Patient List</h1>
            {patienList.map((item) => {
                return (<li key={item}>{item} <Button>delete</Button></li>)
            })}
        </div>
    )
}

export default DoctorPatientList