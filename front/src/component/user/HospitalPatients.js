import axios from 'axios'
import { useEffect, useState } from 'react';

import ItemPatient from './ItemPatient';
function HospitalPatients() {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const [patients, setPatients] = useState([]);
    async function getPatients() {
        let temp;
        await axios.get(`${BASE_URL}/Patient?organization=INLab`).then((res) => {
            console.log(res.data.entry);
            temp = res.data.entry;
            setPatients(temp);
        });

        temp.map((item,index) => {
            let name, age, gender, address;
            name = item.resource.name[0].text;
            age = item.resource.extension[4].valueString;
            gender = item.resource.gender;
            address = item.resource.address[0].text;
            console.log(name, age, gender, address);
        })
    }

    useEffect(() => {
        getPatients();
    }, [])
    
    return (
        <div className="hospital_patients">
            <div className='hospital_info_container'>
                <div className='title'>Dongguk University Hospital</div>
                <div className='address'>
                    87, Dongdae-ro, Gyeongju-si, Gyeongsangbuk-do, Republic of Korea
                </div>
                <div className='telecom'>054-748-9300</div>
            </div>
            <ItemPatient patients={patients} />
        </div>
    )
}

export default HospitalPatients;