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
            <div className='id'>id: {propIndex}</div>
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