import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
function RequestModal({ show, closeHandler}) {
    const checks = ["PID", "Name", "Age", "Gender", "Mobile Phone", "Address", "Symptoms", "Adding Comment", "Assigner", "Doctor Name"];
    return(
        <div className="request_modal">
            <Modal show={show} onHide={closeHandler} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Request PHR</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='check_col'>
                            {checks.map((item, key) => {
                                return (<Form.Check 
                                    inline
                                    label={item}
                                    type="checkbox"
                                    name="group1"
                                    id={item}
                                    key={key}
                                />)
                            })}
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Amount payable</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="amount HBT"
                            autoFocus
                        />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeHandler}>
                        Request
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RequestModal;