import PatientSearch from "./PatientSearch";
function PatientRight({contract, listKey}) {
    return (
        <div className="patient_right">
            <PatientSearch contract={contract}/>
        </div>
    )
}

export default PatientRight;