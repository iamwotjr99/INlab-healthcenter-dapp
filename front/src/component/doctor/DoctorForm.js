import Web3 from 'web3';
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
    });

    const [web3, setWeb3] = useState();
    const [contract, setContract] = useState();

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
            setWeb3(web3);

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
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
        await contract.methods.addPatientData(formData.address, formData.name,
            formData.age, formData.weight, formData.height, formData.symptom,
            formData.description).send({
                from: userAddr
            }).then(async (result) => {
                console.log("success");
                console.log(result);
                console.log("-------");
                await contract.methods.readPatientData(formData.address).call().then(console.log);
            });
        setFormData({
            ...formData,
            address: "",
            name: "",
            age: "",
            weight: "",
            height: "",
            symptom: "",
            description: "",
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
            </Form>
            <Button variant="warning" onClick={btnAddData}>Create</Button>
        </div>
    )
}

export default DoctorForm;