import axios from 'axios';

import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
function FHIRTest() {
    const BASE_URL = "http://203.247.240.226:22650/api"
    
    async function getAPI() {
        await axios.post(`${BASE_URL}/create`, {
            AcountID: 'sithu27', 
            DateTime: '2022-6-28', 
            Organization: 'INLab', 
            patientName: 'Sithu', 
            Function: 'Create', 
            data: 'Patient EHR', 
            PHRhash: 'rQZRVpG4phj1aSuke5yDtzV3Q0z2FnDseAPjRDrQLRHoLd6Xt1Vgqzu7s', 
            checkingBalance: 10000000,
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