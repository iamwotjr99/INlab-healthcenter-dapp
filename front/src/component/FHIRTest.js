import axios from 'axios';

import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
function FHIRTest() {
    const BASE_URL = "http://203.247.240.226:22650/api"
    
    async function getAPI() {
        await axios.post(`${BASE_URL}/create`, {
            "EHRNumber": "Wotjr001",
            "patientID": 'Wotjr001',
            "DateTime": '2022-6-21',
            "Organization": 'Dongguk Hospital',
            "patientName": 'Jaeseok',
            "Function": 'Create',
            "data": 'Patient EHR',
            "test": "test"
        }).then(console.log)
    }
    return (
        <div className='fhir_test'>
            <Button type='button' onClick={getAPI}>get</Button>
        </div>
    )
}

export default FHIRTest;


// "patientID": 'Alice27',
// "DateTime": '2022-9-12',
// "Organization": 'Dongguk Hospital',
// "patientName": 'Alice',
// "Function": 'Delete',
// "data": 'Patient EHR'