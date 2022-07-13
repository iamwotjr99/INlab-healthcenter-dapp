import { Form, CloseButton, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { useState } from 'react';

import "../css/MedicationItem.css"
function MedicationItem({index, remove}) {
    // unit State는 추후에 상위 컴포넌트에서 FHIR MedicationReport 부분에서 핸들링 할 수 있도록
    // 상위 컴포넌트로 넘길 예정
    const [item, setItem] = useState({
        id: index,
        medication: "",
        unit: "L",
    });

    const onSelectHandler = (e) => {
        setItem({
            ...item,
            unit: e
        })
    }

    const onChangeHandler = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
        console.log(item);
    }

    const removeItem = () => {
        console.log(index);
        remove(index);
    }
    return (
        <div className="medi_item">
            {/* <div className="row_1">
                {index}
            </div> */}
            <div className="row_2">
                <Form.Group className="mb-3" controlId="medication">
                    <Form.Control type="text" name="medication" placeholder="Medication Name"
                    value={item.medication} onChange={onChangeHandler}/>
                </Form.Group>
            </div>
            <div className="row_2">
                <Form.Group className="mb-3" controlId="amount">
                    <Form.Control type="text" name="amount" placeholder="Medication Amount"
                    value={item.medication} onChange={onChangeHandler}/>
                </Form.Group>
            </div>
            <div className="row_3">
                <DropdownButton id="dropdown-basic-button" title={item.unit}
                onSelect={onSelectHandler} >
                    <Dropdown.Item eventKey="L">L</Dropdown.Item>
                    <Dropdown.Item eventKey="ml">ml</Dropdown.Item>
                    <Dropdown.Item eventKey="cc">cc</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="row_4">
                <CloseButton onClick={removeItem}/>
            </div>
        </div>
    )
}

export default MedicationItem;