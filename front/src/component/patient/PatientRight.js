import PatientSearch from "./PatientSearch";
function PatientRight({contract, listKey, account}) {
    return (
        <div className="patient_right">
            <PatientSearch contract={contract} account={account}/>
        </div>
    )
}

export default PatientRight;