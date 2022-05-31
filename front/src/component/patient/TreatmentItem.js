function TreatmentItem({data}) {
    return(
        <div className="treatment_item">
            <hr></hr>
            <div className='id'>PHR ID: 0</div>
            <div className="address">Address: {data.id}</div>
            <div className="name">Name: {data.name[0].text}</div>
            {/* <div className="age">Age: {}</div> */}
            <div className="gender">Gender: {data.gender}</div>
            <br></br>
            <div className="telecom">Telecom: {data.telecom.map((item, index) => {
                return <li key={index}>{item.use} || {item.value}</li>
            })}</div>
            <br></br>
            <div className="contract_title">Contact</div>
            <div className="name">Name: {data.contact[0].name.text}</div>
            <div className="gender">Gender: {data.contact[0].gender}</div>
            <div className="relationship">Relationship: {data.contact[0].relationship[0].text}</div>
            <div className="address">Address: {data.contact[0].address.text}</div>
            <br></br>
            <div className="symptom">Symptom: {data.extension[0].valueString}</div>
            <div className="comment">Comment: {data.extension[1].valueString}</div>
            {/* <div className="doctorAccount">DoctorAddress: {}</div> */}
            <div className="doctorName">Doctor: {data.extension[2].valueString}</div>
            <div className="hospital">Hospital: {data.identifier[0].assigner.display}</div>
            <div className='createdAt'>CreatedAt: {data.meta.lastUpdated}</div>
            {/* {treat.updatedAt ? <div className='updatedAt'>UpdatedAt: {}</div>:
            <></>} */}
        </div>
    )
}

export default TreatmentItem;