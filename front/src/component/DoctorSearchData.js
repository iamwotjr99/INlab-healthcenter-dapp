function DoctorSearchData({data}) {
    return (
        <div className="doctor_search_data">
            <hr></hr>
            <div className="address">address: {data.address}</div>
            <div className="age">age: {data.age}</div>
            <div className="weight">weight: {data.weight}</div>
            <div className="height">height: {data.height}</div>
            <div className="symptom">symptom: {data.symptom}</div>
            <div className="description">description: {data.description}</div>
        </div>
    )
}

export default DoctorSearchData;