import { Form, Button } from "react-bootstrap";

function HospitalSendPHR() {
    return (
        <div className="hospital_send_phr">
            <Form>
                <div className="phr_top">
                    <div className="phr_top_left">
                        <div className="col_1">
                            <Form.Group className="mb-3" controlId="pid">
                                <Form.Label>PID</Form.Label>
                                <Form.Control type="text" placeholder="Enter PID" />
                            </Form.Group>
                        </div>
                        <div className="col_2">
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter age" />
                            </Form.Group>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select defaultValue="male">
                                    <option>male</option>
                                    <option>female</option>
                                </Form.Select>
                            </Form.Group>           
                        </div>
                        <div className="col_3">
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Mobile phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone number" />
                            </Form.Group>
                        </div>
                        <div className="col_4">
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter your home address" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="phr_top_right">
                        <div className="col_1">
                            <Form.Group className="mb-3" controlId="relationship">
                                <Form.Label>Relationship</Form.Label>
                                <Form.Control type="text" placeholder="Relationship with patient" />
                            </Form.Group>
                        </div>
                        <div className="col_2">
                            <Form.Group className="mb-3" controlId="contact_name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter age" />
                            </Form.Group>
                        </div>
                        <div className="col_3">
                            <Form.Group className="mb-3" controlId="contact_phone">
                                <Form.Label>Mobile phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact phone number" />
                            </Form.Group>
                        </div>
                        <div className="col_4">
                            <Form.Group className="mb-3" controlId="contact_address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact address" />
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <div className="phr_bottom">
                    <div className="col_1">
                        <Form.Group className="mb-3" controlId="symptom">
                            <Form.Label>Symptom</Form.Label>
                            <Form.Control type="text" placeholder="Enter contact address" />
                        </Form.Group>
                    </div>
                    <div className="col_2">
                        <Form.Group className="mb-3" controlId="comment">
                            <Form.Label>Adding comment</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                    </div>
                    <div className="col_3">
                        <Form.Group className="mb-3" controlId="assginer">
                            <Form.Label>Assigner</Form.Label>
                            <Form.Control type="text" placeholder="Enter assigner" />
                         </Form.Group>
                        <Form.Group className="mb-3" controlId="doctor">
                            <Form.Label>Doctor name</Form.Label>
                            <Form.Control type="text" placeholder="Enter doctor name" />
                        </Form.Group>
                        <Button className="btn_phr_send" variant="success">Send</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default HospitalSendPHR;