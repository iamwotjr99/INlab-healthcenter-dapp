import { useState } from 'react';
import { Tab, Row, ListGroup, Col, Card } from 'react-bootstrap';
import DoctorRight from './DoctorRight';
function Doctor({ userAddr, userType }) {

    const [listKey, setListKey] = useState();

    const onClickHandler = (e) => {
        console.log(e.target.value);
        setListKey(e.target.value);
    }
    return (
        <div className="doctor">
            <Tab.Container id="list-group-tabs" defaultActiveKey={0}>
                <Row>
                    <Col sm={3}>
                        <ListGroup>
                            <ListGroup.Item action eventKey={0}
                            value="0" variant="warning" onClick={onClickHandler}>
                                Patient Form
                            </ListGroup.Item>
                            <ListGroup.Item action eventKey={1}
                            value="1" variant="warning" onClick={onClickHandler}>
                                Patient Data Search
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Card>
                            <DoctorRight userAddr={userAddr} listKey={listKey}/>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Doctor;