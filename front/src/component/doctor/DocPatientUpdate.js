import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function DocPatientUpdate({ setToggle, patientAddr, contract, index, treat, account }) {
    const [formData, setFormData] = useState({
        address: "",
        name: "",
        age: "",
        weight: "",
        height: "",
        symptom: "",
        description: "",
    });

    useEffect(() => {
        setFormData({
            ...formData,
            address: treat.patientAddr,
            name: treat.patientName,
            age: treat.patientAge,
            weight: treat.patientWeight,
            height: treat.patientHeight,
            symptom: treat.symptom,
            description: treat.description
        })
    }, [])

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const btnUpdateHandler = async () => {
        await contract.methods.updatePatientData(patientAddr, formData.name,
            formData.age, formData.weight, formData.height, formData.symptom,
            formData.description, index).send({from: account}).then(setToggle(false));
    }

    return (
        <div className="doctor_patient_update">
            <Form>
                <Form.Group className='mb-3' controlId="address">
                    <Form.Label>Patient address</Form.Label>
                    <Form.Control type="text" name="address" value={formData.address} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="name">
                    <Form.Label>Patient name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="age">
                    <Form.Label>Patient age</Form.Label>
                    <Form.Control type="text" name="age" value={formData.age} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="weight">
                    <Form.Label>Patient weight</Form.Label>
                    <Form.Control type="text" name="weight" value={formData.weight} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="height">
                    <Form.Label>Patient height</Form.Label>
                    <Form.Control type="text" name="height" value={formData.height} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="symptom">
                    <Form.Label>Patient symptom</Form.Label>
                    <Form.Control type="text" name="symptom" value={formData.symptom} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="desciption">
                    <Form.Label>Patient description</Form.Label>
                    <Form.Control type="text" name="description" as="textarea" 
                    value={formData.description}
                    rows={3} onChange={changeHandler}/>
                </Form.Group>
                <Button variant='warning'
                    onClick={btnUpdateHandler}>Update</Button>
            </Form>
        </div>
    )
}

export default DocPatientUpdate;