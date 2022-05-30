import Web3 from 'web3';
import axios from 'axios';

import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../../abi/HealthCareABI';
function DoctorForm ({userAddr}) {
    const [formData, setFormData] = useState({
        address: "",
        name: "",
        age: "",
        weight: "",
        height: "",
        symptom: "",
        description: "",
        doctorName: "",
        hospital: "",
        createdAt: "",
    });

    const [contract, setContract] = useState();
    const [account, setAccount] = useState();

    const postFormData = async () => {
         axios.post("/doctor/postformdata", {
            body: formData,
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
        console.log(formData);
    }

    const btnAddData = async () => {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
        const dateTime = date+' '+time;
        setFormData({
            ...formData,
            createdAt: dateTime,
        });
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
            address: "",
            name: "",
            age: "",
            weight: "",
            height: "",
            symptom: "",
            description: "",
            doctorName: "",
            hospital: "",
        })
    }

    return (
        <div className='doctor_form'>
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

                <Form.Group className='mb-3' controlId="doctorName">
                    <Form.Label>Doctor name</Form.Label>
                    <Form.Control type="text" name="doctorName" value={formData.doctorName} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="hospital">
                    <Form.Label>Hospital</Form.Label>
                    <Form.Control type="text" name="hospital" value={formData.hospital} onChange={changeHandler}/>
                </Form.Group>
            </Form>
            <Button variant="warning" onClick={btnAddData}>Create</Button>
        </div>
    )
}

export default DoctorForm;