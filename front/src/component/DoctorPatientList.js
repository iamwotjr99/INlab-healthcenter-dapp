import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import {HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../abi/HealthCareABI';
import DocPatientUpdate from './DocPatientUpdate';
function DoctorPatientList() {

    const [patienList, setPatientList] = useState([]);
    const [contract, setContract] = useState();
    const [account , setAccount] = useState();
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [patientAddr, setPatientAddr] = useState();

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
            setAccount(account[0])

            setPatientList([]);
            const result = await contract.methods.getPatientList(account[0]).call();
            console.log("result: ", result);
            setPatientList(result);
        }

        init();
    }, [count])

    const btnDeleteHandler = async (e) => {
        const deletePatientAddr = e.target.value;
        await contract.methods.deletePatientData(deletePatientAddr).send({
            from: account
        }).then(setCount(count + 1));
    }

    const btnUpdateToggle = (e) => {
        setPatientAddr(e.target.value);
        setToggle(true);
    }

    return (
        <div className="doctor_patient_list">
            {toggle ? <DocPatientUpdate setToggle={setToggle} patientAddr={patientAddr} account={account} contract={contract} /> : 
                <div>
                    <div className='title'>Patient List</div>
                    <hr></hr>
                    {patienList.map((item, index) => {
                        return (<div className="list_item" key={index}>Account: {item}
                        <div className='list_button'>
                            <Button
                                variant='warning'
                                value={item}
                                onClick={btnUpdateToggle}>Update</Button>
                            <Button 
                                variant='danger'
                                value={item}
                                onClick={btnDeleteHandler}>Delete
                            </Button>
                            </div>
                        </div>)
                    })}
                </div>
            }
        </div>
    )
}

export default DoctorPatientList