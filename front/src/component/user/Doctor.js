import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import Header from './UserHeader';
import SideMenu from './SideMenu';
import DoctorRight from './DoctorRight';
function Doctor() {
    const location = useLocation();
    const [state, setState] = useState();
    const CODE = 1;
    return (
        <div className="dotor_container">
            <Header prop={location.state}/>
            <div className='doctor_main'>
                <div className='doctor_content'>
                    <SideMenu setState={setState} CODE={CODE}/>
                    <div className='right_content'>
                        <DoctorRight state={state} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor;