import PatientTreatments from "./PatientTreatments";
import PatientDoctorList from "./PatientDoctorList";
function PatientRight({contract, listKey, account}) {
    return (
        <div className="patient_right">
            {listKey == 0 ? <PatientTreatments contract={contract} account={account}/> :
             listKey == 1 ? <PatientDoctorList contract={contract} account={account}/> : <></>}
        </div>
    )
}

export default PatientRight;