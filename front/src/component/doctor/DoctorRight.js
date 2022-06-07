import DoctorForm from "./DoctorForm"
import DoctorSearch from "./DoctorSearch"
import DoctorPatientList from "./DoctorPatientList";
function DoctorRight ({ userAddr ,listKey }) {
    return (
        <div className="doctor_right">
            {listKey == 0 ?  <DoctorForm userAddr={userAddr} /> : 
             listKey == 1 ?  <DoctorSearch /> :
             listKey == 2 ? <DoctorPatientList userAddr={userAddr}/> : <DoctorForm userAddr={userAddr} />}
        </div>
    )
}

export default DoctorRight;