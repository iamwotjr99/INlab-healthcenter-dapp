import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
function DoctorReq() {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const [request, setRequest] = useState({
        req: "",
    });
    const [resultList, setResultList] = useState();

    const getRequest = async () => {
        let temp = [];
        await axios.get(`${BASE_URL}/Condition?code:text=${request.req}`).then((res) => {
            for(const item of res.data.entry) {
                temp.push(item);
            }
        })
        setResultList(temp);
    }

    const changeHandler = (e) => {
        setRequest({
            [e.target.name]: e.target.value,
        })
    }

    const onSearchHandler = () => {
        getRequest();
    }

    return (
        <div className="doctor_reqeust">
            <div className="request_container">
                <div className='request_form'>
                    <Form>
                        <Form.Group className="mb-3" controlId="req">
                            <Form.Label>Request Data</Form.Label>
                            <Form.Control type="text" placeholder="Search data" name="req" value={request.req}
                                onChange={changeHandler}/>
                        </Form.Group>
                    </Form>
                    <Button onClick={onSearchHandler}>Search</Button>
                </div>
            </div>

            <div className="result_container">
                {resultList && resultList.map((item) => {
                    return item.resource.id;
                })}
            </div>
        </div>
    )
}

export default DoctorReq;