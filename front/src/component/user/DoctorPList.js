import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ItemPatient from './ItemPatient';
function DoctorPList() {
    const {id} = useParams();
    const BASE_URL = "http://203.247.240.226:8080/fhir"

    const [patientList, setPatientsList] = useState();
    async function getPatients() {
        let temp = [];
        await axios.get(`${BASE_URL}/Patient?organization=INLab&general-practitioner=${id}`).then((res) => {
            for(const item of res.data.entry) {
                if(item.resource.meta.tag === undefined) {
                    temp.push(item);
                }
            }

            setPatientsList(temp);
            console.log(temp);
        })
    }
    useEffect(() => {
        getPatients();
    }, [])
    return (
        <div className="doctor_pList">
            <ItemPatient patients={patientList} />
        </div>
    )
}

export default DoctorPList;