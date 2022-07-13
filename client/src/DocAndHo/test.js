import { Button } from 'react-bootstrap';
import { useState } from 'react';

import MedicationItem from './MedicationItem';
function Test() {
    const [mediItem, setMediItem] = useState([])
    const [index, setIndex] = useState(0);
    const clickBtn = () => {
        mediItem.push(index);
        setIndex(index + 1);
    }
    const remove = () => {
        mediItem.pop();
        setIndex(index - 1);
    }
    const reset = () => {
        setMediItem([]);
        setIndex(0);
    }
    return (
        <div>
            test
            <Button onClick={clickBtn}>add</Button>
            <Button onClick={remove}>remove</Button>
            <Button onClick={reset}>reset</Button>
            <div>
                {console.log(mediItem)}
                {mediItem.map((item, key) => {
                    return (
                        <MedicationItem index={item} key={key}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Test;