import { Button } from 'react-bootstrap';
function ItemPatient({patients}) {
    return (
        <div className="patient_list_container">
            {console.log(patients.length)}
            {patients && patients.map((item, index) => {
                    return (
                        <div className='item_patient' key={index}>
                            <div className='name'>
                                PID: {item.resource.id}
                            </div>
                            <div className='doctor'>
                                {item.resource.extension[2].valueString}
                            </div>
                            <div className='address'>
                                {item.resource.extension[3].valueString}
                            </div>
                            <Button variant="outline-success">View</Button>
                        </div>
                    )
                })}
        </div>
    )
}

export default ItemPatient;