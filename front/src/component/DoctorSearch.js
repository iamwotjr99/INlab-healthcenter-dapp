import Web3 from 'web3';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS } from '../abi/HealthCareABI';
import { Form, Button, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import DoctorSearchData from './DoctorSearchData';
function DoctorSearch() {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);
    const [contract ,setContract] = useState();
    const [patientData, setPatientData] = useState({
        address: "",
        name: "",
        age: "",
        weight: "",
        height: "",
        symptom: "",
        description: "",
    });

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
            console.log("account: ", account);
        }
        init();
    }, [])

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const btnGetData = async () => {
        const result = await contract.methods.readPatientData(input).call().then(setToggle(true));
        console.log(result.patientAge);
        setPatientData({
            ...patientData,
            address: result.patientAddr,
            name: result.patientName,
            age: result.patientAge,
            weight: result.patientWeight,
            height: result.patientHeight,
            symptom: result.symptom,
            description: result.description,

        })
    }

    return (
        <div className="doctor_search">
            <div className='title'>
                Search patient data
            </div>
            <Form className='d-flex'>
                <FormControl
                    type="search"
                    placeholder='Search'
                    className='me-2'
                    aria-label="Search"
                    value={input}
                    onChange={onChangeHandler}>
                </FormControl>
                <Button variant="outline-warning" onClick={btnGetData}>Search</Button>
            </Form>
            {toggle ? <DoctorSearchData data={patientData}/> : <></>}
        </div>
    )
}

export default DoctorSearch;