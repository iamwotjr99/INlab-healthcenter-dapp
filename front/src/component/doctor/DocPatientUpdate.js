import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function DocPatientUpdate({ setToggle, patientAddr, contract, index, treat, account }) {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const [formData, setFormData] = useState({
        account: "",
        assigner: "",
        name: "",
        age: "",
        telecome: {
            myPhone: "",
        },
        gender: "",
        birthdate: "",
        address: "",
        contact: {
            name: "",
            phone: "",
            relationship: "",
            address: "",
            gender: "",
        },
        symptom: "",
        comment: "",
        doctorName: "",
    });

    async function updatePatientData() {
        await axios.put(`${BASE_URL}/Patient/${patientAddr}`, {
            "resourceType": "Patient",
            "id": formData.account,
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody/></table></div>"
            },
            "identifier": [
                {
                    "use": "usual",
                    "assigner": {
                        "display": formData.assigner,
                    }
                }
            ],
            "name": [
                {
                    "text": formData.name
                }
            ],
            "age": formData.age,
            "address" : [
                {
                    "use": "home",
                    "text": formData.address
                }
            ],
            "telecom": [
                {
                    "system": "phone",
                    "value": formData.telecome.myPhone,
                    "use": "mobile"
                }
            ],
            "gender": formData.gender,
            "contact": [
                {
                    "relationship":[
                        {
                            "text":formData.contact.relationship
                        }
                    ],
                    "name": {
                        "text": formData.contact.name
                    },
                    "gender": formData.contact.gender,
                    "telecom": [
                        {
                            "system": "phone",
                            "value": formData.contact.phone,
                            "use": "mobile"
                        }
                    ],
                    "address": [
                        {
                            "use":"home",
                            "text": formData.contact.address
                        }
                    ]
                }
            ],
            "extension" : [
                {
                    "url": "symptom",
                    "valueString": formData.symptom
                },
                {
                    "url": "comment",
                    "valueString": formData.comment
                },
                {
                    "url": "doctor",
                    "valueString": formData.doctorName
                },
                {
                    "url": "doctorAddr",
                    "valueString": account
                },
                {
                    "url": "age",
                    "valueString": formData.age
                }
            ],
            "generalPractitioner": {
                "reference": `Practitioner/${account}`
            }
        }).then((res) => {
            console.log(res);
            setToggle(false);
        })
    } 

    useEffect(() => {
        setFormData({
            ...formData,
            account: treat.id,
            assigner: treat.identifier[0].assigner.display,
            name: treat.name[0].text,
            age: treat.extension[4].valueString,
            telecome: {
                myPhone: treat.telecom[0].value
            },
            gender: treat.gender,
            address: treat.address[0].text,
            contact: {
                name: treat.contact[0].name.text,
                gender: treat.contact[0].gender,
                address: treat.contact[0].address.text,
                relationship: treat.contact[0].relationship[0].text,
                phone: treat.contact[0].telecom[0].value,
            },
            symptom: treat.extension[0].valueString,
            comment: treat.extension[1].valueString,
            doctorName: treat.extension[2].valueString
        })
    }, [])

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const telChangeHandler = (e) => {
        setFormData({
            ...formData,
            telecome: {
                ...formData.telecome,
                [e.target.name]: e.target.value,
            },
        })
    }

    const conChangeHandler = (e) => {
        setFormData({
            ...formData,
            contact: {
                ...formData.contact,
                [e.target.name]: e.target.value,
            },
        })
    }

    const btnUpdateHandler = async () => {
        // const today = new Date();
        // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        // const time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
        // const dateTime = date+' '+time;
        // await contract.methods.updatePatientData(patientAddr, formData.name,
        //     formData.age, formData.weight, formData.height, formData.symptom,
        //     formData.description, dateTime, index).send({from: account}).then(setToggle(false));
        updatePatientData()
    }

    return (
        <div className="doctor_patient_update">
            <Form>
                <Form.Group className='mb-3' controlId="account">
                    <Form.Label>Patient Account</Form.Label>
                    <Form.Control type="text" name="account" value={formData.account} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="assigner">
                    <Form.Label>Assigner</Form.Label>
                    <Form.Control type="text" name="assigner" value={formData.assigner} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" name="age" value={formData.age} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" name="gender" value={formData.gender} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={formData.address} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="telecome.myPhone">
                    <Form.Label>My Phone</Form.Label>
                    <Form.Control type="text" name="myPhone" value={formData.telecome.myPhone} onChange={telChangeHandler}/>
                </Form.Group>

                Contact
                <Form.Group className='mb-3' controlId="contact.name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.contact.name} onChange={conChangeHandler}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId="contact.phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name="phone" value={formData.contact.phone} onChange={conChangeHandler}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId="contact.gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" name="gender" value={formData.contact.gender} onChange={conChangeHandler}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId="contact.relationship">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control type="text" name="relationship" value={formData.contact.relationship} onChange={conChangeHandler}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId="contact.address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={formData.contact.address} onChange={conChangeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="symptom">
                    <Form.Label>Symptom</Form.Label>
                    <Form.Control type="text" name="symptom" value={formData.symptom} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>Adding Comment</Form.Label>
                    <Form.Control type="text" name="comment" as="textarea" 
                    value={formData.comment}
                    rows={3} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="doctorName">
                    <Form.Label>Doctor Name</Form.Label>
                    <Form.Control type="text" name="doctorName" value={formData.doctorName} onChange={changeHandler}/>
                </Form.Group>
            </Form>
            <Button variant="warning" onClick={btnUpdateHandler}>Create</Button>
        </div>
    )
}

export default DocPatientUpdate;