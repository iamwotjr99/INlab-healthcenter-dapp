import { useEffect, useState } from 'react';
import RecordListLeft from './RecordListLeft';
import RecordListRight from './RecordListRight';
import "../css/PatientRecord.css"

function RecordsList({record}) {

    const [leftItem, setLeftItem] = useState([]);
    const [rightItem, setRightItem] = useState([]);
    console.log(record);
    
    useEffect(() => {
            let leftTemp = [];
            let rightTemp = [];
            console.log("in map: ", record);
            if(record !== undefined) {
                record.map((item, index) => {
                    // (index%2 === 0 ? setLeftItem([...leftItem, item]) : setRightItem([...rightItem, item]));
                    if(index % 2 === 0) {
                        leftTemp.push(item);
                    } else {
                        rightTemp.push(item);
                    }
                })
            }
            setLeftItem(leftTemp);
            setRightItem(rightTemp);
    }, [record])
    return (
        <div className='patient_list_container'>
            <div className='patient_list_left'>
                {leftItem && leftItem.map((item, index) => {
                    return <RecordListLeft item={item} index={index} key={index} />
                })}
            </div>
            {/* {leftItem.map((item) => {
                return (item.resource.id);
            })} */}
            <div className='patient_list_right'>
                {rightItem && rightItem.map((item, index) => {
                    return <RecordListRight item={item} index={index} key={index} />
                })}
            </div>
        </div>
    )
}

export default RecordsList;

   