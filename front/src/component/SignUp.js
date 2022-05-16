import Web3 from 'web3';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function SignUp () {
    const navigate = useNavigate();
    const [web3, setWeb3] = useState();

    const moveToSendEther = () => {
        navigate('/sendether');
    }

    const moveToDoctorSignUp = () => {
        navigate('/doctorsignup');
    }

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
            setWeb3(web3);

            const account = await web3.eth.requestAccounts();
            console.log("account: ", account);
        }
        init();
    }, [])

  return (
    <div className="main">
      <Button onClick={moveToSendEther}>to send</Button>
      <Button onClick={moveToDoctorSignUp}>to doctor signup</Button>
    </div>
  );
}

export default SignUp;