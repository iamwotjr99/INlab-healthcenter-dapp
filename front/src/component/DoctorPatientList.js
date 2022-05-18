import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import {HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../abi/HealthCareABI';
function DoctorPatientList() {

    const [patienList, setPaientList] = useState([]);
    const [contract, setContract] = useState();
    const [account , setAccount] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
            setAccount(account[0])
            const result = await contract.methods.getPatientList().call();
            console.log(result);
            setPaientList(result);
        }

        init();
    }, [count])

    const btnDeleteHandler = async (e) => {
        const patientAddr = e.target.value;
        console.log(patientAddr);
        await contract.methods.deletePatientData(patientAddr).send({
            from: account
        }).then(setCount(count + 1));
    }
    return (
        <div className="doctor_patient_list">
            <h1>Patient List</h1>
            {patienList.map((item, index) => {
                return (<li key={index}>{item} 
                <Button 
                    value={item} 
                    onClick={btnDeleteHandler}>delete
                </Button></li>)
            })}
        </div>
    )
}

export default DoctorPatientList