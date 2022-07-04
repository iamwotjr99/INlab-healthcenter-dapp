import React,{useState} from 'react'
import Header from './Header'
import useCollapse from 'react-collapsed';

import "../css/InformationExchange.css"; 

const getFormattedPrice = (price) => `${price.toFixed(2)}`;

function Section(props) {
  const config = {
      defaultExpanded: props.defaultExpanded || false,
      collapsedHeight: props.collapsedHeight || 0
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          <div className="title">{props.title+(isExpanded ? ' 👇🏻 ' : ' 👉🏻 ')}</div>
          
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
              {props.children}
          </div>
      </div>
  </div>
  );
}

const InformationExchange = () => {
  const toppings = [
    {
      name: "Name",
      price: 0.02
    },
    {
      name: "Age",
      price: 0.02
    },
    {
      name: "Gender",
      price: 0.02
    },
    {
      name: "Mobile phone",
      price: 0.03
    },
    {
      name: "Address",
      price: 0.05
    },
    {
      name: "Symptom",
      price: 0.0
    },
    {
      name: "Adding comment",
      price: 0.5
    },
    {
        name: "Assigner",
        price: 0.5
      },
      {
        name: "Doctor name",
        price: 0.5
      }
  ];
  
const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };
return (
  <>
  <Header/>
  <div className="structure">
        <div className="UserRequestData">
          <br></br>
          <h3>Required Data by Doctor James </h3>
          <br></br>
          <ul className="toppings-list">
            {toppings.map(({ name, price }, index) => {
              return (
                <li key={index}>
                  <div className="toppings-list-item">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                    <div className="right-section">{getFormattedPrice(price)}</div>
                  </div>
                </li>
              );
            })}
            <li><div className="right-section">Total HBT: {getFormattedPrice(total)}</div></li>
          </ul>
        </div>

        <div className="UserResendData">
          <br></br>
          <h3>Selected Data Details </h3>
          <br></br>
          
        </div>
      </div>
      </>
);
}
  
  
  

export default InformationExchange;
