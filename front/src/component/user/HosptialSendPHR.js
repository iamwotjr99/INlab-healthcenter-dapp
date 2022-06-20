import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
function HospitalSendPHR() {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const [formData, setFormData] = useState({
        pid: "",
        assigner: "",
        name: "",
        age: 0,
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

    const sendPHR = async () => {
        axios.put(`${BASE_URL}/Patient/${formData.pid}`, {
           "resourceType": "Patient",
           "id": formData.pid,
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
                   "url": "assigner",
                   "valueString": formData.assigner
               },
               {
                   "url": "age",
                   "valueString": formData.age
               }
           ],
           "generalPractitioner": {
               "reference": `Practitioner/${formData.doctorName}`
           },
           "managingOrganization":{
               "reference": `Organization/${formData.assigner}`
           }
        }).then((res) => {
           console.log("from server: ", res);
       })
    }

    const telChangeHandler = (e) => {
        setFormData({
            ...formData,
            telecome: {
                ...formData.telecome,
                [e.target.name]: e.target.value,
            }
        })
    }

    const conChangeHandler = (e) => {
        setFormData({
            ...formData,
            contact: {
                ...formData.contact,
                [e.target.name]: e.target.value,
            }
        })
    }

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        console.log(formData);
    }

    return (
        <div className="hospital_send_phr">
            <Form>
                <div className="phr_top">
                    <div className="phr_top_left">
                        <div className="col_1">
                            <Form.Group className="mb-3" controlId="pid">
                                <Form.Label>PID</Form.Label>
                                <Form.Control type="text" placeholder="Enter PID" name="pid" value={formData.pid}
                                onChange={changeHandler}/>
                            </Form.Group>
                        </div>
                        <div className="col_2">
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name}
                                onChange={changeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter age" name="age" value={formData.age}
                                onChange={changeHandler}/>
                            </Form.Group>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select name="gender" value={formData.gender}
                                onChange={changeHandler}>
                                    <option>male</option>
                                    <option>female</option>
                                </Form.Select>
                            </Form.Group>           
                        </div>
                        <div className="col_3">
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Mobile phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone number" name="myPhone" value={formData.telecome.myPhone}
                                onChange={telChangeHandler}/>
                            </Form.Group>
                        </div>
                        <div className="col_4">
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter your home address" name="address" value={formData.address}
                                onChange={changeHandler}/>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="phr_top_right">
                        <div className="col_1">
                            <Form.Group className="mb-3" controlId="relationship">
                                <Form.Label>Relationship</Form.Label>
                                <Form.Control type="text" placeholder="Relationship with patient" 
                                name="relationship" value={formData.contact.relationship}
                                onChange={conChangeHandler}/>
                            </Form.Group>
                        </div>
                        <div className="col_2">
                            <Form.Group className="mb-3" controlId="contact_name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" value={formData.contact.name} onChange={conChangeHandler}/>
                            </Form.Group>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select name="gender" value={formData.contact.gender}
                                onChange={conChangeHandler}>
                                    <option>male</option>
                                    <option>female</option>
                                </Form.Select>
                            </Form.Group> 
                        </div>
                        <div className="col_3">
                            <Form.Group className="mb-3" controlId="contact_phone">
                                <Form.Label>Mobile phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact phone number" name="phone" value={formData.contact.phone} onChange={conChangeHandler}/>
                            </Form.Group>
                        </div>
                        <div className="col_4">
                            <Form.Group className="mb-3" controlId="contact_address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact address" name="address" value={formData.contact.address} onChange={conChangeHandler}/>
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <div className="phr_bottom">
                    <div className="col_1">
                        <Form.Group className="mb-3" controlId="symptom">
                            <Form.Label>Symptom</Form.Label>
                            <Form.Control type="text" placeholder="Enter contact address" name="symptom" value={formData.symptom}
                            onChange={changeHandler}/>
                        </Form.Group>
                    </div>
                    <div className="col_2">
                        <Form.Group className="mb-3" controlId="comment">
                            <Form.Label>Adding comment</Form.Label>
                            <Form.Control as="textarea" rows={2} name="comment" value={formData.comment}
                            onChange={changeHandler}/>
                        </Form.Group>
                    </div>
                    <div className="col_3">
                        <Form.Group className="mb-3" controlId="assginer">
                            <Form.Label>Assigner</Form.Label>
                            <Form.Control type="text" placeholder="Enter assigner" name="assigner" value={formData.assigner}
                            onChange={changeHandler}/>
                         </Form.Group>
                        <Form.Group className="mb-3" controlId="doctor">
                            <Form.Label>Doctor name</Form.Label>
                            <Form.Control type="text" placeholder="Enter doctor name" name="doctorName" value={formData.doctorName}
                            onChange={changeHandler}/>
                        </Form.Group>
                        <Button className="btn_phr_send" variant="success" onClick={sendPHR}>Send</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default HospitalSendPHR;