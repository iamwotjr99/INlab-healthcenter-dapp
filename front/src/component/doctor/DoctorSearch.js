import Web3 from 'web3';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS } from '../../abi/HealthCareABI';
import { BUY_ABI, BUY_CONTRACT_ADDRESS } from '../../abi/BuyABI';
import { Form, Button, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import DoctorSearchData from './DoctorSearchData';
function DoctorSearch() {
    const [web3, setWeb3] = useState();
    const [toggle, setToggle] = useState(false);
    const [contract ,setContract] = useState();
    const [sendEtherContract, setSendEtherContract] = useState();
    const [txInfo, setTxInfo] = useState({
        receiver: "",
        ether: "",
        sender:"",
    });
    const [patientData, setPatientData] = useState();

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
            setWeb3(web3);
            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);
            const sendEtherContract = new web3.eth.Contract(BUY_ABI, BUY_CONTRACT_ADDRESS);
            setSendEtherContract(sendEtherContract);

            const account = await web3.eth.requestAccounts();
            setTxInfo({
                ...txInfo,
                sender: account[0],
            })
        }
        init();
    }, [])

    const onChangeHandler = (e) => {
        setTxInfo({
            ...txInfo,
            [e.target.name]: e.target.value,
        })
    }

    const btnRequestData = async () => {
        await sendEtherContract.methods.sendMoney(txInfo.receiver).send({
            from: txInfo.sender,
            value: web3.utils.toWei(txInfo.ether, 'ether')
        }).then(async () => {
            const result = await contract.methods.readPatientTreats(txInfo.receiver).call().then(setToggle(true));
            console.log(result);
            setPatientData(result);
        })
    }

    return (
        <div className="doctor_search">
            <div className='title'>
                Request patient data
            </div>
            <Form className='ether'>
                <Form.Control placeholder="Ether" type="number" name="ether" value={txInfo.ether} onChange={onChangeHandler}/>
            </Form>
            <Form className='d-flex'>
                <FormControl
                    type="text"
                    placeholder='Receiver Address'
                    className='me-2'
                    name="receiver"
                    aria-label="Search"
                    value={txInfo.receiver}
                    onChange={onChangeHandler}>
                </FormControl>
                <Button variant="outline-warning" onClick={btnRequestData}>Request</Button>
            </Form>
            {patientData && toggle ? patientData.map((item, index) => {
                return <DoctorSearchData key={index} treat={item} id={index}/>
            }) : <></>}
        </div>
    )
}

export default DoctorSearch;