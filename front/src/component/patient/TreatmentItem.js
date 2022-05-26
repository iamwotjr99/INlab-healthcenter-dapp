function TreatmentItem({treat, id}) {
    return(
        <div className="treatment_item">
            <hr></hr>
            <div className='id'>PHR ID: {id}</div>
            <div className="address">Address: {treat.patientAddr}</div>
            <div className="name">Name: {treat.patientName}</div>
            <div className="age">Age: {treat.patientAge}</div>
            <div className="weight">Weight: {treat.patientWeight}</div>
            <div className="height">Height: {treat.patientHeight}</div>
            <div className="symptom">Symptom: {treat.symptom}</div>
            <div className="description">Description: {treat.description}</div>
            <div className="doctorAccount">DoctorAddress: {treat.doctorAddr}</div>
            <div className="doctorName">Doctor: {treat.doctorName}</div>
            <div className="hospital">Hospital: {treat.hospital}</div>
            <div className='createdAt'>CreatedAt: {treat.createdAt}</div>
            {treat.updatedAt ? <div className='updatedAt'>UpdatedAt: {treat.updatedAt}</div>:
            <></>}
        </div>
    )
}

export default TreatmentItem;