import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <div className="LabelInput">
          <label className="Label">{props.label}</label>
          <input
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
        </div>
        
      );
      break;
    case "textarea":
      inputElement = (
        <div className="LabelInput">
          <label className="Label">{props.label}</label>
          <textarea
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          />
        </div>
        
      );
      break;
    case "select":
      inputElement = (
        <div className="LabelInput">
         <label className="Label">{props.label}</label> 
        <select
          className="InputElement"
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
        </div>
        
      );
      break;
    default:
      inputElement = (
        <div className="LabelInput">
          <label className="Label">{props.label}</label>
          <input
            className="InputElement"
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </div>
      );
  }
  return (
    <div className="Input">
        {inputElement}
    </div>
);
};

//WE WILL START FROM HERE.

export default input;
