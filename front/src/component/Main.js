import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Main() {
    const navigate = useNavigate();

    const moveToSendEther = () => {
        navigate('/sendether');
    }

    const moveToDoctorSingUp = () => {
        navigate('/doctorsignup');
    }

  return (
    <div className="main">
      <Button onClick={moveToSendEther}>to send</Button>
      <Button onClick={moveToDoctorSingUp}>to doctor signup</Button>
    </div>
  );
}

export default Main;