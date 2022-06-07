import {useEffect, useState} from 'react';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS } from '../../abi/HealthCareABI';
import TreatmentItem from './TreatmentItem';
import Web3 from 'web3';
import axios from 'axios';

function PatientTreatments({account}) {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const [treats, setTreats] = useState();
    const [data, setData] = useState();

    async function getPatientData() {
        await axios.get(`${BASE_URL}/Patient/${account}`).then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    } 

    async function getTreatments() {
        const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
        const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
        const resAccount = await web3.eth.requestAccounts();
        // const array = await contract.methods.readPatientTreats(account[0]).call();
        // setTreats(array);
    }

    useEffect(() => {
        getTreatments();
        if(account !== undefined ) {
            getPatientData();
        }
    }, [])

    return(
        <div className='patient_treatments'>
            <div className='title'>Treatments</div>
            {/* {datas && datas.map((item, index) => {
                return <TreatmentItem key={index} treat={item} id={index}/>
            })} */}
            {data && <TreatmentItem data={data} />}
        </div>
    )
}

export default PatientTreatments;