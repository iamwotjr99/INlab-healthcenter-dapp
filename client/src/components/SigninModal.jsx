import React , { useState } from "react";
import { useNavigate } from 'react-router';
import { Modal, Form } from "react-bootstrap";
import SignupModal from "./SignupModal";
import Header from "./Header";

const SigninModal = ({ show, onHide }) => {
  const [signupModalOn, setSignupModalOn] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",

});

const onChangeHandler = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    })
}
const onClickBtn = () => {
    if(user.email ==="jhikyuinn") {
    <Header email={user.email}></Header>
    navigate(`/patient/${user.email}`, {id: user.email});
}
    else if(user.email === "James") {
        navigate(`/doctor/${user.email}`, {id: user.email})
    }
    else if(user.email === "INLab") {
      navigate(`/hospital/${user.email}`, {id: user.email});
  }
    else if(user.email !== undefined) {
      navigate(`/hospital/${user.email}`, {id: user.email});
  }
}
  return (
    <>
    <SignupModal
    show={signupModalOn}
    onHide={() => setSignupModalOn(false)}
    />
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={onChangeHandler} />
            </Form.Group>
            <br></br>

            <a onClick={onClickBtn}className="my_btn">
              Login
            </a>

            <a onClick={() => setSignupModalOn(true)} className="my_btn">
              Signup
            </a>
            
          </Form>
        </Modal.Body>
    </Modal>

    </>

  );
};

export default SigninModal;