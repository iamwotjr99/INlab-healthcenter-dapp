import { Button } from 'react-bootstrap';

function DoctorTreatment({setIndex, setToggle, setTreatment, treat, propIndex, account, contract}) {
    const btnUpdateHandler = (e) => {
        console.log(e.target.value);
        console.log(propIndex);
        setToggle(true);
        setIndex(propIndex);
        setTreatment(treat);
    }

    const btnDeleteHandler = async (e) => {
        console.log(e.target.value);
        const deleteAccount = e.target.value;
        console.log(propIndex);
        await contract.methods.deletePatientData(account, deleteAccount, propIndex).send({
            from: account
        });
    }
    return(
        <div className="doctor_treatment">
            <hr></hr>
            <div className='id'>PHR ID: {propIndex}</div>
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
            <div className='btn_area'>
                <Button 
                    variant='warning'
                    value={treat.patientAddr}
                    onClick={btnUpdateHandler} >Update</Button>
                <Button 
                    variant='danger'
                    value={treat.patientAddr}
                    onClick={btnDeleteHandler} >Delete</Button>
            </div>
        </div>
    )
}

export default DoctorTreatment;