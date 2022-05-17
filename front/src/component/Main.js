import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { HEALTH_CARE_ABI, CONTRACT_ADDRESS} from '../abi/HealthCareABI';

import SignUp from './SignUp';
import Doctor from './Doctor';
import Header from './Header';
function Main() {
    const [web3, setWeb3] = useState();
    const [contract, setContract] = useState();
    const [userAddr, setUserAddr] = useState();
    const [userType, setUserType] = useState();

    useEffect(() => {
        async function init() {
            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
            setWeb3(web3);

            const contract = new web3.eth.Contract(HEALTH_CARE_ABI, CONTRACT_ADDRESS);
            setContract(contract);

            const account = await web3.eth.requestAccounts();
            setUserAddr(account[0]);
            const userType = await contract.methods.getUser(account[0]).call();
            console.log(userType);
            setUserType(userType);
        }
        init();
    }, [])

  return (
    <div className="main_container">
      <Header userType={userType} userAddr={userAddr}/>
      <div className='main'>
        {userType ? <Doctor userAddr={userAddr} userType={userType}/> 
          : <SignUp/>}
      </div>
    </div>
  );
}

export default Main;