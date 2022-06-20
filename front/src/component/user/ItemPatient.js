function ItemPatient({patients}) {
    return (
        <div className="patient_list_container">
            {patients.map((item, index) => {
                    return (
                        <div className='item_patient' key={index}>
                            <div className='name'>
                                {item.resource.name[0].text}
                            </div>
                            <div className='age_gender'>
                                <div className='age'>
                                    {item.resource.extension[4].valueString}
                                </div>
                                <div className='gender'>
                                    {item.resource.gender}
                                </div>
                            </div>
                            <div className='address'>
                                {item.resource.address[0].text}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default ItemPatient;