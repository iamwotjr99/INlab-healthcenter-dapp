import { useState } from 'react';
import RequestModal from './RequestModal';
function ItemResult({ item }) {
    const [show, setShow] = useState();

    const closeHandler = () => {
        setShow(false);
    }

    const showHandler = () => {
        setShow(true);
    }

    const btnHandler = () => {
        showHandler();
    }

    return (
        <>
            <RequestModal 
                show={show}
                closeHandler={closeHandler}
                showHandler={showHandler}
            />
        
            <div className="item_result">
                <div className="pid">
                    PID: {item.resource.id}
                </div>
                <div className="symptom">
                    Symptom: {item.resource.code.text}
                </div>
                <div className="doctor">
                    Doctor: {item.resource.extension[0] && item.resource.extension[0].valueString}
                </div>
                <div className="assigner">
                    Assigner: {item.resource.extension[1] && item.resource.extension[1].valueString}
                </div>
                <div className='colum_2_item'>
                    <div className='createdAt'>
                        {item.resource.extension[2] && item.resource.extension[2].valueString}
                    </div>
                    <a className='my_view' style={{marginLeft:"auto"}} onClick={btnHandler}>Request</a>
                </div>
            </div>

        </>
    )
}

export default ItemResult;   