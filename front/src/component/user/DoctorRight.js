import DoctorInfo from "./DoctorInfo";
import DoctorReq from "./DoctorReq";
import DoctorPList from "./DoctorPList";
function DoctorRight( {state} ) {
    return (
        <div className="content">
            {state === 1 ? <DoctorReq /> :
             state === 2 ? <DoctorPList /> :
             <DoctorInfo />}
        </div>
    )
}

export default DoctorRight;