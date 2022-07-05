import axios from 'axios';
import { useEffect } from 'react';
function Payment() {
    const BLOCK_CHAIN_URL = "http://203.247.240.226:22650/api"

    const payment = async () => {
        await axios.post(`${BLOCK_CHAIN_URL}/sendPayment`, {
            "SenderName": "EHR1", 
            "ReceiverName":"EHR1206",
            "Price":1000
        }).then((res) => {
            console.log(res);
        })
    }

    const payBtnHandler = () => {
        payment();
    }

    return (
        <div><button onClick={payBtnHandler}>payment</button></div>
    )
}

export default Payment;