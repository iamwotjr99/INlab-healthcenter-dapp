import {useEffect, useState} from 'react';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS } from '../../abi/HealthCareABI';
import TreatmentItem from './TreatmentItem';
import Web3 from 'web3';

function PatientTreatments({account}) {
    const [treats, setTreats] = useState();
    useEffect(() => {
        async function getTreatments() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            const account = await web3.eth.requestAccounts();
            const array = await contract.methods.readPatientTreats(account[0]).call();
            console.log('array:', array);
            setTreats(array);
        }

        getTreatments();

    }, [])
    return(
        <div className='patient_treatments'>
            <div className='title'>Treatments</div>
            {treats && treats.map((item, index) => {
                return <TreatmentItem key={index} treat={item} id={index}/>
            })}
        </div>
    )
}

export default PatientTreatments;