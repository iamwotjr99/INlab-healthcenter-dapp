import { Button } from 'react-bootstrap';
function ItemPatientLeft({ item, index }) {
    return (
        <div className='item_patient_left' key={index}>
            <div className='name'>
                 PID: {item.resource.id}
             </div>
            <div className='doctor'>
                {item.resource.extension[2].valueString}
            </div>
             <div className='address'>
                 {item.resource.extension[3].valueString}
             </div>
            <div className='createdAt'>
                 {item.resource.extension[5] ? item.resource.extension[5].valueString : <></>}
            </div>
            <Button variant="outline-success">View</Button>
        </div>
    )
}

export default ItemPatientLeft;