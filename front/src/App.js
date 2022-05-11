import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Button, Form } from 'react-bootstrap'

import {BUY_ABI, CONTRACT_ADDRESS} from './abi/BuyABI';

function App() {

  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [accountList, setAccountList] = useState([]);
  const [owner, setOwner] = useState();

  useEffect(() => {
    async function init() {
      const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
      //const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
      setWeb3(web3);

      const contract = new web3.eth.Contract(BUY_ABI, CONTRACT_ADDRESS);
      setContract(contract);
      console.log(contract);

      const accountList = await web3.eth.getAccounts();
      console.log(accountList);
      setAccountList(accountList);

      const owner = await contract.methods.getOwner().call();
      setOwner(owner);
      console.log(owner);

      //web3.eth.requestAccounts().then(console.log);

    }
    
    init();
  }, [owner])

  const accountHandler = (e) => {
    setAccount(e.target.value);
  }

  const sendHandler = async () => {
    console.log(account);
    // console.log(await contract.methods.getBalance(owner).call());
    await contract.methods.sendMoney("0x8c1b888854b474813f4a58f148D0CC034F48991B", 10).send({
      from: "0xC02A491B0e6a6f076A59772Eee5c48f562bae5E4",
      value: web3.utils.toWei('12', 'ether')
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <Form.Select aria-label="Default select example" onChange={accountHandler}>
        {accountList.map((item) => {
            return(<option value={item} key={item}>{item}</option>)
          })}
        </Form.Select>
      </div>
      <Button onClick={sendHandler}>send</Button>
    </div>
  );
}

export default App;
