function DoctorSearchData({treat, id}) {
    return (
        <div className="doctor_search_data">
            <hr></hr>
            <div className='id'>id: {id}</div>
            <div className="address">address: {treat.patientAddr}</div>
            <div className="name">name: {treat.patientName}</div>
            <div className="age">age: {treat.patientAge}</div>
            <div className="weight">weight: {treat.patientWeight}</div>
            <div className="height">height: {treat.patientHeight}</div>
            <div className="symptom">symptom: {treat.symptom}</div>
            <div className="description">description: {treat.description}</div>
            <div className="doctorAccount">doctorAddress: {treat.doctorAddr}</div>
            <div className="doctorName">doctor: {treat.doctorName}</div>
            <div className="hospital">hospital: {treat.hospital}</div>
            <div className='createdAt'>createdAt: {treat.createdAt}</div>
            {treat.updatedAt ? <div className='updatedAt'>updatedAt: {treat.updatedAt}</div>:
            <></>}
        </div>
    )
}

export default DoctorSearchData;