import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import {HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../../abi/HealthCareABI';
import DocPatientUpdate from './DocPatientUpdate';
import DoctorViewTreatments from './DoctorViewTreatments';
function DoctorPatientList() {

    const [patientList, setPatientList] = useState([]);
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
            console.log(account[0]);

            setPatientList([]);
            const array = await contract.methods.getPatientList(account[0]).call();
            // const dumpArr = [];
            // array.forEach((item) => {
            //     dumpArr.push(item.patAddr);
            // })
            // const set = new Set(dumpArr);
            // const accountArr = [...set];
            // console.log("result: ", accountArr);
            const map = new Map();
            for(const item of array) {
                map.set(JSON.stringify(item.patAddr, item.name), [item.patAddr, item.name]);
            }
            const result = [...map.values()];
            console.log(result);
            setPatientList(result);
        }

        init();
    }, [count])


    const btnView = (e) => {
        setPatientAddr(e.target.value);
        setToggle(e)
    }

    return (
        <div className="doctor_patient_list">
            {toggle ? <DoctorViewTreatments setToggle={setToggle} patientAddr={patientAddr} account={account} contract={contract} /> : 
                <div>
                    <div className='title'>Patient List</div>
                    <hr></hr>
                    {patientList.map((item, index) => {
                        return (
                        <div className="list_item" key={index}>Name: {item[1]} || Account: {item[0]}
                        <div className='list_button'>
                            <Button 
                                variant='warning'
                                value={item[0]}
                                onClick={btnView}>View
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