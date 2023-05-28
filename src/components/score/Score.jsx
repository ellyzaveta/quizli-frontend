import React, { useState } from 'react';
import logo from "./images/logo.svg"
import "./Score.css"

//component for displaying user score after quiz form submition

const Score = (props) => {
    const [quizName] = useState(props.quizName);
    const [quizDesc] = useState(props.quizDesc);
    const [userScore] = useState(props.userScore);
    const [maxScore] = useState(props.maxScore);
  
    return (
        <div>
            <div className="page-content">
                <div className="title">
                    <div className="title-button">
                        <h2 className="quiz-name">{quizName}</h2>
                        <h2>{maxScore} / {userScore}</h2>
                    </div>
                    <p>{quizDesc}</p>
                </div>
                <div style={{ marginTop: "450px" }}>
                    <div className="form-header-logo-buttom">
                        <img src={logo} alt="logo" style={{ width: "75px", height: "60px" }} />
                        <h2>QUIZLI</h2>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Score;