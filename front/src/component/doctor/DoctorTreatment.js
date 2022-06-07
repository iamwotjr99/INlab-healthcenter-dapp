import axios from 'axios';
import { Button } from 'react-bootstrap';

function DoctorTreatment({setIndex, setToggle, setTreatment, treat, propIndex, account, contract, setHomeToggle}) {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    async function deletePatientData(addr) {
        await axios.delete(`${BASE_URL}/Patient/${addr}`).then((res) => {
            console.log(res);
            setHomeToggle(false);
        })
    }

    const btnUpdateHandler = (e) => {
        console.log(e.target.value);
        console.log(propIndex);
        console.log(treat);
        setToggle(true);
        setIndex(propIndex);
        setTreatment(treat);
    }

    const btnDeleteHandler = async (e) => {
        const deleteAccount = e.target.value;
        // await contract.methods.deletePatientData(account, deleteAccount, propIndex).send({
        //     from: account
        // });
        deletePatientData(deleteAccount);
    }
    return(
        <div className="doctor_treatment">
            <hr></hr>
            <div className='id'>PHR ID: 0</div>
            <div className="address">Address: {treat.id}</div>
            <div className="name">Name: {treat.name[0].text}</div>
            {/* <div className="age">Age: {}</div> */}
            <div className="gender">Gender: {treat.gender}</div>
            <br></br>
            <div className="telecom">Telecom: {treat.telecom.map((item, index) => {
                return <li key={index}>{item.use} || {item.value}</li>
            })}</div>
            <br></br>
            <div className="contract_title">Contact</div>
            <div className="name">Name: {treat.contact[0].name.text}</div>
            <div className="gender">Gender: {treat.contact[0].gender}</div>
            <div className="relationship">Relationship: {treat.contact[0].relationship[0].text}</div>
            <div className="address">Address: {treat.contact[0].address.text}</div>
            <br></br>
            <div className="symptom">Symptom: {treat.extension[0].valueString}</div>
            <div className="comment">Comment: {treat.extension[1].valueString}</div>
            {/* <div className="doctorAccount">DoctorAddress: {}</div> */}
            <div className="doctorName">Doctor: {treat.extension[2].valueString}</div>
            <div className="hospital">Hospital: {treat.identifier[0].assigner.display}</div>
            <div className='createdAt'>CreatedAt: {treat.meta.lastUpdated}</div>
            {treat.updatedAt ? <div className='updatedAt'>UpdatedAt: {treat.updatedAt}</div>:
            <></>}
            <div className='btn_area'>
                <Button 
                    variant='warning'
                    value={treat.id}
                    onClick={btnUpdateHandler} >Update</Button>
                <Button 
                    variant='danger'
                    value={treat.id}
                    onClick={btnDeleteHandler} >Delete</Button>
            </div>
        </div>
    )
}

export default DoctorTreatment;