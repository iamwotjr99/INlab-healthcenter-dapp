import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import {HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../../abi/HealthCareABI';
import DocPatientUpdate from './DocPatientUpdate';
import DoctorViewTreatments from './DoctorViewTreatments';
function DoctorPatientList({userAddr}) {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const [patientList, setPatientList] = useState([]);
    const [contract, setContract] = useState();
    const [account , setAccount] = useState();
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [patientAddr, setPatientAddr] = useState();

    async function getPatientData() {
        //console.log(userAddr);
        await axios.get(`${BASE_URL}/Patient?general-practitioner=${userAddr}`).then((res) => {
            //console.log(res.data.entry);
            for(const item of res.data.entry) {
                if(item.resource.meta.tag !== undefined) {
                    //console.log(item.resource.id, "i'm duplicate")
                    continue;
                } else {
                    setPatientList([...patientList, item]);
                }
            }
            // if(res.data.entry !== undefined) {
            //     for(let i = 0; i < res.data.entry.length; i = i + 2) {
            //         setPatientList([...patientList, res.data.entry[i]]);
            //     }
            // } else {
            //     console.log("entry is empty")
            // }
        });
    } 

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
            setAccount(account[0])

            setPatientList([]);
            const array = await contract.methods.getPatientList(account[0]).call();
            
            // const map = new Map();
            // for(const item of array) {
            //     map.set(JSON.stringify(item.patAddr, item.name), [item.patAddr, item.name]);
            // }
            // const result = [...map.values()];
            // // console.log(result);
            // setPatientList(result);
        }
        init();
        getPatientData();
    }, [])


    const btnView = (e) => {
        setPatientAddr(e.target.value);
        setToggle(true);
    }

    return (
        <div className="doctor_patient_list">
            {toggle ? <DoctorViewTreatments setToggle={setToggle} patientAddr={patientAddr} account={account} contract={contract} /> : 
                <div>
                    <div className='title'>Patient List</div>
                    <hr></hr>
                    {patientList.map((item, index) => {
                        return (
                        <div className="list_item" key={index}>Name: {item.resource.name[0].text} || Account: {item.resource.id}
                        <div className='list_button'>
                            <Button 
                                variant='warning'
                                value={item.resource.id}
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