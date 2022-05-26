import {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import Web3 from 'web3';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS } from '../../abi/HealthCareABI';
import Header from '../Header';
function PatientSignUp() {
    const [contract, setContract] = useState();
    const [patient, setPatient] = useState({
        patAddr: "",
        name: "",
        age: "",
    })

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);
            
            const account = await web3.eth.requestAccounts();

            setPatient({
                ...patient,
                patAddr: account[0],
            })
        }

        init();
    }, [])

    const changeHandler = (e) => {
        setPatient({
            ...patient,
            [e.target.name]: e.target.value,
        })
    }

    const signUpHandler = async () => {
        await contract.methods.addPatient(patient.patAddr, patient.name, patient.age).send({from: patient.patAddr})
        .then(console.log);
    }
    return (<div className="patient_sign_up_container">
        <Header />
        <div className='patient_sign_up'>
            <Form>
                <Form.Group className='mb-3' controlId="patient_address">
                    <Form.Label>Your address</Form.Label>
                    <Form.Control type="text" name="patAddr" value={patient.patAddr} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="patient_name">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name="name" value={patient.name} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="patient_age">
                    <Form.Label>Your age</Form.Label>
                    <Form.Control type="text" name="age" value={patient.age} onChange={changeHandler}/>
                </Form.Group>

                <Button variant='warning' onClick={signUpHandler}>Sign up</Button>
            </Form>
        </div>
    </div>)
}

export default PatientSignUp;