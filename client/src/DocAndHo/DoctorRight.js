import DoctorTx from "./DoctorTx";
import DoctorReq from "./DoctorReq";
import DoctorPList from "./DoctorPList";
function DoctorRight( {state} ) {
    return (
        <div className="d_h_content">
            {state === 1 ? <DoctorReq /> :
             state === 2 ? <DoctorTx /> :
             <DoctorPList />}
        </div>
    )
}

export default DoctorRight;