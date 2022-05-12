import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Button, Form } from 'react-bootstrap'

import {BUY_ABI, CONTRACT_ADDRESS} from './abi/BuyABI';

function App() {

  const [web3, setWeb3] = useState();
  const [contract, setContract] = useState();
  const [sender, setSender] = useState();

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
      setSender(account[0]);

      //web3.eth.requestAccounts().then(console.log);

    }
    
    init();
  }, [])

  const sendHandler = async () => {
    console.log("sender: ", sender);
    // console.log(await contract.methods.getBalance(owner).call());
    await contract.methods.sendMoney("0x8c1b888854b474813f4a58f148D0CC034F48991B").send({
      from: sender,
      value: web3.utils.toWei('1', 'ether'),
      data: {
        welcome: "hello"
      }
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <Form.Select aria-label="Default select example">
          <option>{sender}</option>
        </Form.Select>
      </div>
      <Button onClick={sendHandler}>send</Button>
    </div>
  );
}

export default App;
