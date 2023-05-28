import React from "react";
import "./FormHeader.css"
import logo from "./images/logo.svg"
import Button from "../button/Button";

const FormHeader = ({onClick, buttonName}) => {
    return (
        <div className="form-header">
            <div className="form-header-logo">
                <img src={logo} alt="logo" style={{width:"75px",height:"60px"}}/>
                <h2>QUIZLI</h2>   
            </div>
            <Button onClick={onClick}>{buttonName}</Button>
        </div>
    )
}
  
export default FormHeader;
