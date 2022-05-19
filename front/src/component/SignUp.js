import Web3 from 'web3';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import doctorImg from '../image/img_doctor.png';
function SignUp () {
    const navigate = useNavigate();
    const [web3, setWeb3] = useState();

    // const moveToSendEther = () => {
    //     navigate('/sendether');
    // }

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
      <Card style={{width: '18rem'}}>
        <Card.Img variant='top' src={doctorImg}/>
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
          <Card.Text>
            If you are doctor, you sign up INLAB Health Center and then,
            you can manage your patient with our service.
          </Card.Text>
          <Button variant='warning'
            onClick={moveToDoctorSignUp}>Go sign up!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;