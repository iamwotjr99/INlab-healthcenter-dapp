import axios from 'axios'
import { useEffect } from 'react';
function HospitalPatients() {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    async function getPatients() {
        await axios.get(`${BASE_URL}/Patient?organization=INLab`).then((res) => {
            console.log(res.data);
        });
    }
    useEffect(() => {
        getPatients();
    })
    
    return (
        <div className="hospital_patients">
            
        </div>
    )
}

export default HospitalPatients;