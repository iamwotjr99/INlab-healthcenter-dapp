import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Button, Form } from 'react-bootstrap'

import {BUY_ABI, CONTRACT_ADDRESS} from '../abi/BuyABI';

function SendEther() {
  const [web3, setWeb3] = useState();
  const [contract, setContract] = useState();

  const [txInfo, setTxInfo] = useState({
    sender: "",
    receiver: "",
    ether: "",
  })

  useEffect(() => {
    async function init() {
      const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
      //const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
      setWeb3(web3);

      const contract = new web3.eth.Contract(BUY_ABI, CONTRACT_ADDRESS);
      setContract(contract);
      console.log("contract: ", contract);

      const account = await web3.eth.requestAccounts();
      console.log("sender: ", account);
      setTxInfo({
        ...txInfo,
        sender: account[0],
      })

      //web3.eth.requestAccounts().then(console.log);

    }
    
    init();
  }, [])

  const sendHandler = async () => {
    // console.log(await contract.methods.getBalance(owner).call());
    await contract.methods.sendMoney(txInfo.receiver).send({
      from: txInfo.sender,
      value: web3.utils.toWei(txInfo.ether, 'ether'),
      data: {
        welcome: "hello"
      }
    })
  }

  const changeHandler = (e) => {
    setTxInfo({
      ...txInfo,
      [e.target.name]: e.target.value,
    })
    console.log(txInfo);
  }

  return (
    <div className='container'>
        <Form>
            <Form.Group className='mb-3' controlId="sender">
                <Form.Label>Sender Account</Form.Label>
                <Form.Control type="text" name="sender" value={txInfo.sender} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className='mb-3' controlId="receiver">
                <Form.Label>Receiver Account</Form.Label>
                <Form.Control type="text" name="receiver" value={txInfo.receiver} onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId="ether">
                <Form.Label>Ether amount</Form.Label>
                <Form.Control type="number" name="ether" value={txInfo.ether} onChange={changeHandler}/>
            </Form.Group>

            <Button onClick={sendHandler}>send</Button>
        </Form>
  </div>
  )
}

export default SendEther