function TreatmentItem({treat, id}) {
    return(
        <div className="treatment_item">
            <hr></hr>
            <div className="id">id: {id}</div>
            <div className="address">address: {treat.patientAddr}</div>
            <div className="name">name: {treat.patientName}</div>
            <div className="age">age: {treat.patientAge}</div>
            <div className="weight">weight: {treat.patientWeight}</div>
            <div className="height">height: {treat.patientHeight}</div>
            <div className="symptom">symptom: {treat.symptom}</div>
            <div className="description">description: {treat.description}</div>
        </div>
    )
}

export default TreatmentItem;