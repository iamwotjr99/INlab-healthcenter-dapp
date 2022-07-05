import React from 'react';
import "../css/HeaderModal.css";

function DoctorNotification({open, close, header}) {
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <main>PID: 151qz response ok<button className="my_info">Payment</button></main>
                    <main>PID: wd1223a response ok<button className="my_info">Payment</button></main>
                </section>
            ) : null}
        </div>
    )
}

export default DoctorNotification;