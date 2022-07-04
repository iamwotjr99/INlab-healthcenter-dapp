import { Button } from 'react-bootstrap';
function ItemResult({ item }) {
    return (
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
                <a className='my_view' style={{marginLeft:"auto"}}>Request</a>
            </div>
        </div>
    )
}

export default ItemResult;   