import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
function DoctorPList() {
    const {id} = useParams();
    const BASE_URL = "http://203.247.240.226:8080/fhir"

    async function getPatients() {
        await axios.get(`${BASE_URL}/Patient?general-practitioner=${id}`).then((res) => {
            console.log(res.data.entry);
        })
    }
    useEffect(() => {
        getPatients();
    }, [])
    return (
        <div className="doctor_pList">Patient List</div>
    )
}

export default DoctorPList;