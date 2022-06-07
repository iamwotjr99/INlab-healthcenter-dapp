import { useEffect, useState } from "react";
import axios from 'axios';

import btnBack from '../../image/img_back.png'
import DoctorTreatment from "./DoctorTreatment";
import DoctorPatientUpdate from './DocPatientUpdate';

function DoctorViewTreatments({setToggle, patientAddr, account, contract}) {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const [treats, setTreats] = useState("");
    const [updateToggle, setUpdateToggle] = useState(false);
    const [index, setIndex] = useState();
    const [treatment, setTreatment] = useState();

    async function getPatientData(addr) {
        await axios.get(`${BASE_URL}/Patient/${addr}`).then((res) => {
            setTreats(res.data);
        })
    }

    useEffect(() => {
        // async function getTreatments() {
        //     await contract.methods.readPatientTreats(patientAddr).call()
        //     .then(
        //         (result) => {
        //             setTreats(result);
        //         }
        //     )
        // }
        
        getPatientData(patientAddr);
        //getTreatments();
    }, [treats])

    const btnBackHandler = () => {
        setToggle(false);
    }
    return(
        <div>
            {updateToggle ? <DoctorPatientUpdate setToggle={setUpdateToggle} patientAddr={patientAddr} 
            contract={contract} index={index} treat={treatment} account={account} /> : <div className="doctor_view_treatments">
                {treats && <div className='title'>
                    <img src={btnBack} alt="btn_back" onClick={btnBackHandler}/>
                    Patient treatments
                    </div>}
                {treats && 
                    <DoctorTreatment key={index} setIndex={setIndex} setToggle={setUpdateToggle} setTreatment={setTreatment} setHomeToggle={setToggle}
                        propIndex={index} treat={treats} account={account} contract={contract}/>
                    }
            </div>}
        </div>
        
    )
}

export default DoctorViewTreatments;