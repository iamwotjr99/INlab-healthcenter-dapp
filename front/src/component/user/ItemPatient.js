import { useEffect, useState } from 'react';
import ItemPatientLeft from './ItemPatientLeft';
import ItemPatientRight from './ItemPatientRight';
function ItemPatient({patients}) {
    const [leftItem, setLeftItem] = useState([]);
    const [rightItem, setRightItem] = useState([]);

    useEffect(() => {
            let leftTemp = [];
            let rightTemp = [];
            patients.map((item, index) => {
                // (index%2 === 0 ? setLeftItem([...leftItem, item]) : setRightItem([...rightItem, item]));
                if(index % 2 === 0) {
                    leftItem.push(item);
                } else {
                    rightItem.push(item);
                }
            })
    }, [])
    return (
        <div className="patient_list_container">
            {console.log(leftItem, rightItem)}
        </div>
    )
}

export default ItemPatient;