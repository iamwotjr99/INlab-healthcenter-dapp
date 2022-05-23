import { useEffect, useState } from "react";
import Web3 from 'web3';
import {HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../abi/HealthCareABI';
function PatientSearch() {
    const [contract, setContract] = useState();
    const [account ,setAccount] = useState();
    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
            console.log('account:', account[0]);
            await contract.methods.readPatientTreats(account[0]).call().then(console.log);
        }
        init();
    }, [])
    return (
        <div className="patient_search_data">
            patient treats data
        </div>
    )
}

export default PatientSearch;