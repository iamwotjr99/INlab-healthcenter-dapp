import {useEffect, useState} from 'react';
import TreatmentItem from './TreatmentItem';

function PatientTreatments({contract, account}) {
    const [treats, setTreats] = useState();
    useEffect(() => {
        async function getTreatments() {
            const array = await contract.methods.readPatientTreats(account).call();
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