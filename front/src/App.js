import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './component/Main';
import SendEther from './component/SendEther';
import DoctorSignUp from './component/doctor/DoctorSignUp';
import DoctorForm from './component/doctor/DoctorForm';
import PatientSignUp from './component/patient/PatientSignUp';
import FHIRTest from './component/FHIRTest';
import User from './component/user/User';
import Hospital from './component/user/Hospital';
import Doctor from './component/user/Doctor';
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/sendether" element={<SendEther />} />
        <Route path="/doctorsignup" element={<DoctorSignUp />} />
        <Route path="/doctorform" element={<DoctorForm />} />
        <Route path="/patientsignup" element={<PatientSignUp />} />
        <Route path="/posttest" element={<FHIRTest />} />
        <Route path="/user" element={<User />} />
        <Route path="/hospital/:id" element={<Hospital />} />
        <Route path="/doctor/:id" element={<Doctor />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
