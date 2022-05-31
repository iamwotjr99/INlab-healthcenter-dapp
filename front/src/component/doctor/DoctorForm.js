import Web3 from 'web3';
import axios from 'axios';

import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../../abi/HealthCareABI';
function DoctorForm ({userAddr}) {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const [formData, setFormData] = useState({
        account: "",
        assigner: "",
        name: "",
        age: "",
        telecome: {
            work: "",
            home: "",
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

    const [contract, setContract] = useState();
    const [account, setAccount] = useState();

    const postFormData = async () => {
         axios.put(`${BASE_URL}/Patient/${formData.account}`, {
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
                        "display": formData.assigner
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
                    "value": formData.telecome.work,
                    "use": "work"
                },
                {
                    "system": "phone",
                    "value": formData.telecome.home,
                    "use": "home"
                },
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
                    "telecome": [
                        {
                            "system": "phone",
                            "value": formData.contact.phone
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
                }
            ]
         }).then((res) => {
            console.log("from server: ", res);
        })
    }

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
            setAccount(account[0]);
            console.log("account: ", account);
        }
        init();
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

    const btnAddData = async () => {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
        const dateTime = (date+' '+time).toString();
        // setFormData({
        //     ...formData,
        //     createdAt: dateTime,
        // });
        postFormData();
        // await contract.methods.addPatientData(formData.address, formData.name,
        //     formData.age, formData.weight, formData.height, formData.symptom,
        //     formData.description, account, formData.doctorName, formData.hospital
        //     , dateTime).send({
        //         from: userAddr
        //     }).then(async (result) => {
        //         console.log("success");
        //         console.log(result);
        //         console.log("-------");
        //     });
        setFormData({
            ...formData,
            account: "",
            assigner: "",
            name: "",
            age: "",
            telecome: {
                work: "",
                home: "",
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
            createdAt: "",
        })
    }

    return (
        <div className='doctor_form'>
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

                Telecome
                <Form.Group className='mb-3' controlId="telecome.work">
                    <Form.Label>Work</Form.Label>
                    <Form.Control type="text" name="work" value={formData.telecome.work} onChange={telChangeHandler}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId="telecome.home">
                    <Form.Label>Home</Form.Label>
                    <Form.Control type="text" name="home" value={formData.telecome.home} onChange={telChangeHandler}/>
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
            <Button variant="warning" onClick={btnAddData}>Create</Button>
        </div>
    )
}

export default DoctorForm;