import { Form, CloseButton, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { useState } from 'react';

import "../css/MedicationItem.css"
function MedicationItem({mediItem, remove, setMediItems, itemList}) {
    // unit State는 추후에 상위 컴포넌트에서 FHIR MedicationReport 부분에서 핸들링 할 수 있도록
    // 상위 컴포넌트로 넘길 예정
    const [item, setItem] = useState({
        id: mediItem.id,
        medication: "",
        amount: "",
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
        editItem(mediItem.id, item);
    }

    const removeItem = () => {
        remove(mediItem.id);
    }

    const editItem = (id, item) => {
        setMediItems(itemList.map((it) => it.id === id ? {...it, ...item} : it))
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
                    <Form.Control type="number" name="amount" placeholder="Medication Amount"
                    value={item.amount} onChange={onChangeHandler}/>
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