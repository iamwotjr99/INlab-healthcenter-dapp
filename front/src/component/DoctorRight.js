import DoctorForm from "./DoctorForm"
import DoctorSearch from "./DoctorSearch"
function DoctorRight ({ userAddr ,listKey }) {
    return (
        <div className="doctor_right">
            {listKey == 1 ?  <DoctorSearch /> : <DoctorForm userAddr={userAddr}/>}
        </div>
    )
}

export default DoctorRight;