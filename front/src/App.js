import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './component/Main';
import SendEther from './component/SendEther';
import DoctorSignUp from './component/doctor/DoctorSignUp';
import DoctorForm from './component/doctor/DoctorForm';
import PatientSignUp from './component/patient/PatientSignUp';
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
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
