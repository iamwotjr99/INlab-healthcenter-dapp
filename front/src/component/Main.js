import Web3 from 'web3';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../abi/HealthCareABI';
function Main() {
    const navigate = useNavigate();
    const [web3, setWeb3] = useState();
    const [contract, setContract] = useState();
    const [userAddr, setUserAddr] = useState();
    const [userType, setUserType] = useState();

    const moveToSendEther = () => {
        navigate('/sendether');
    }

    const moveToDoctorSingUp = () => {
        navigate('/doctorsignup');
    }

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
            setWeb3(web3);

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
            setUserAddr(account[0]);
            const userType = await contract.methods.getUser(account[0]).call();
            console.log(userType);
            setUserType(userType);
        }
        init();
    }, [])

  return (
    <div className="main">
      <Button onClick={moveToSendEther}>to send</Button>
      <Button onClick={moveToDoctorSingUp}>to doctor signup</Button>
      <h6>{userType}: {userAddr}</h6>
    </div>
  );
}

export default Main;