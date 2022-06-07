import Web3 from 'web3';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../../abi/HealthCareABI';
import Header from '../Header';
function DoctorSignUp() {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const navigate = useNavigate();
    const [doctorData, setDoctorData] = useState({
        docAddr: "",
        name: "",
        hospital: "",
    });

    const [contract, setContract] = useState();

    async function doctorLogin() {
        await axios.put(`${BASE_URL}/Practitioner/${doctorData.docAddr}`, {
            "resourceType": "Practitioner",
            "id": doctorData.docAddr,
            "name": doctorData.name
        }).then((res) => {
            console.log(res);
        })
    }

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
            console.log("account: ", account);
            setDoctorData({
                ...doctorData,
                docAddr: account[0],
            })
        }
        init();
    }, [])

    const changeHandler = (e) => {
        setDoctorData({
          ...doctorData,
          [e.target.name]: e.target.value,
        })
        console.log(doctorData);
    }

    const signUpHandler = async () => {
        doctorLogin();
        await contract.methods.addDoctor(doctorData.docAddr, doctorData.name, doctorData.hospital).send({
            from: doctorData.docAddr
        }).then((error, result) => {
            console.log(result);
            navigate(-1);
        });
    }

    return (
        <div className='doctor_signup_container'>
            <Header />
            <div className='doctor_signup'>
                <Form>
                    <Form.Group className='mb-3' controlId="doctor_address">
                        <Form.Label>Your address</Form.Label>
                        <Form.Control type="text" name="docAddr" value={doctorData.docAddr} onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="name">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" name="name" value={doctorData.name} onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="hospital_name">
                        <Form.Label>Your hospital name</Form.Label>
                        <Form.Control type="text" name="hospital" value={doctorData.hospital} onChange={changeHandler}/>
                    </Form.Group>
                    <Button onClick={signUpHandler}>Sign Up</Button>
                </Form>
            </div>
        </div>
    )
}

export default DoctorSignUp