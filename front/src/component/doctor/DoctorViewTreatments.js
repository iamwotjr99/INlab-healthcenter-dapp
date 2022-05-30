import { useEffect, useState } from "react";

import btnBack from '../../image/img_back.png'
import DoctorTreatment from "./DoctorTreatment";
import DoctorPatientUpdate from './DocPatientUpdate';

function DoctorViewTreatments({setToggle, patientAddr, account, contract}) {
    const [treats, setTreats] = useState();
    const [updateToggle, setUpdateToggle] = useState(false);
    const [index, setIndex] = useState();
    const [treatment, setTreatment] = useState();
    useEffect(() => {
        async function getTreatments() {
            await contract.methods.readPatientTreats(patientAddr).call()
            .then(
                (result) => {
                    setTreats(result);
                }
            )
        }
        getTreatments();
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
            {treats && treats.map((item, index) => {
                return <DoctorTreatment key={index} setIndex={setIndex} setToggle={setUpdateToggle} setTreatment={setTreatment}
                    propIndex={index} treat={item} account={account} contract={contract}/>
            })}
        </div>}
        </div>
        
    )
}

export default DoctorViewTreatments;