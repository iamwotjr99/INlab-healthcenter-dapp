import {Tab, Row, Col, ListGroup, Card} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS } from '../abi/HealthCareABI';
import PatientRight from './PatientRight';
function Patient() {
    const [listKey, setListKey] = useState();
    const [contract, setContract] = useState();
    const [account, setAccount] = useState();

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
        
            const account = await web3.eth.requestAccounts();
            setAccount(account[0]);
            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);
        }
        init();
    }, [])

    const onClickHandler = (e) => {
        setListKey(e.target.value);
    }

    return (
        <div className="patient">
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
                            <ListGroup.Item action eventKey={2}
                            value="2" variant="warning" onClick={onClickHandler}>
                                Patient List
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Card>
                            <PatientRight contract={contract} listKey={listKey} account={account}/>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Patient;