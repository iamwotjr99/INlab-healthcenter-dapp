import { useEffect, useState } from 'react';
import axios from 'axios';

function PatientDoctorList({contract, account}) {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const [doctorList, setDoctorList] = useState();
    async function getDoctorList() {
        await axios.get(`${BASE_URL}/Patient/${account}`).then((res) => {
            console.log(res.data.generalPractitioner[0].reference.trim('Practitioner/'));
        })
    }
    useEffect(() => {
        // async function getDoctorList() {
        //     const array = await contract.methods.getDoctorList(account).call();
        //     const map = new Map();
        //     for(const item of array) {
        //         map.set(JSON.stringify(item.docAddr, item.name, item.hospital), 
        //         [item.docAddr, item.name, item.hospital]);
        //     }
        //     const result = [...map.values()];
        //     console.log(result);
        //     setDoctorList(result);
        // }

        //getDoctorList();
        getDoctorList();
    }, []);
    return (
        <div className="patient_doctor_list">
            <div className='title'>Your Doctor List</div>
            <hr></hr>
            {doctorList && doctorList.map((item, index) => {
                return <div key={index}>Doctor: {item[1]} || Hospital: {item[2]}
                    || Account: {item[0]}</div>
            })}
        </div>
    )
}

export default PatientDoctorList;