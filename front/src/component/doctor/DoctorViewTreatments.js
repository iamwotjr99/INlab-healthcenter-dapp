import { useEffect, useState } from "react";
import btnBack from '../../image/img_back.png'
import DoctorTreatment from "./DoctorTreatment";

function DoctorViewTreatments({setToggle, patientAddr, account, contract}) {
    const [treats, setTreats] = useState();
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
        <div className="doctor_view_treatments">
            {treats && <div className='title'>
                <img src={btnBack} alt="btn_back" onClick={btnBackHandler}/>
                {treats[0].patientName}'s treatments
                </div>}
            {treats && treats.map((item, index) => {
                return <DoctorTreatment key={index} propIndex={index} treat={item} account={account} contract={contract}/>
            })}
        </div>
    )
}

export default DoctorViewTreatments;