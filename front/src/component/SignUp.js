import Web3 from 'web3';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import doctorImg from '../image/img_doctor.png';
import patientImg from '../image/img_patient.png';
function SignUp ({ setUserAddr }) {
    const navigate = useNavigate();

    // const moveToSendEther = () => {
    //     navigate('/sendether');
    // }

    const moveToPatientSignUp = () => {
      navigate('/patientsignup');
    }

    const moveToDoctorSignUp = () => {
        navigate('/doctorsignup');
    }

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

            const account = await web3.eth.requestAccounts();
            setUserAddr(account[0]);
            console.log("account: ", account);
        }
        init();
    }, [])

  return (
    <div className="main">
      <Card style={{width: '18rem', height: '34em', marginRight: '60px'}}>
        <Card.Img variant='top' src={patientImg} style={{height: '332px'}}/>
        <Card.Body>
          <Card.Title>Patient Sign Up</Card.Title>
          <Card.Text>
            If you are patient, you sign up INLAB Health Center and then,
            you can check your treatment by our service.
          </Card.Text>
          <Button variant='warning'
            onClick={moveToPatientSignUp}>Go sign up!</Button>
        </Card.Body>
      </Card>

      <Card style={{width: '18rem'}}>
        <Card.Img variant='top' src={doctorImg}/>
        <Card.Body>
          <Card.Title>Doctor Sign Up</Card.Title>
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