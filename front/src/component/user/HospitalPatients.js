import axios from 'axios'
import { useEffect, useState } from 'react';

import ItemPatient from './ItemPatient';
function HospitalPatients() {
    const BASE_URL = "http://203.247.240.226:8080/fhir"

    const [patientList, setPatientsList] = useState([]);

    async function getPatients() {
        let temp = [];
        await axios.get(`${BASE_URL}/Patient?organization=INLab`).then((res) => {
            for(const item of res.data.entry) {
                if(item.resource.meta.tag === undefined) {
                    temp.push(item);
                } 
            }
            setPatientsList(temp);
        });
    }

    useEffect(() => {
        getPatients();
    },[])
    
    return (
        <div className="hospital_patients">
            <div className='hospital_info_container'>
                <div className='title'>Dongguk University Hospital</div>
                <div className='address'>
                    87, Dongdae-ro, Gyeongju-si, Gyeongsangbuk-do, Republic of Korea
                </div>
                <div className='telecom'>054-748-9300</div>
            </div>
            <ItemPatient patients={patientList} />
        </div>
    )
}

export default HospitalPatients;