import React, { useState } from "react";
import './ShareForm.css'
import CopyButton from '../button/CopyButton'
import Button from '../button/Button'

//component for receiving details for quiz sharing

const ShareForm = (props) => {
    const [] = useState(false);
    const url = `http://localhost:${window.location.port}/form/${props.quiz.url}`;
    
    return (
        <div className="share-form-content">
            <div className="content-frame">
                <h2>{props.quiz.quizName}</h2>
                <p className="desc">{props.quiz.quizDescription}</p>
                <fieldset>
                    <legend>quiz url</legend>
                    <div className="copy-content">
                        <p className="text">{url}</p>
                        <CopyButton text={url} />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>quiz code</legend>
                    <div className="copy-content">
                        <p className="text">{props.quiz.code}</p>
                        <CopyButton text={props.quiz.code} />
                    </div>
                </fieldset>
                <Button onClick={props.onBack} className="close-button">Close</Button>
            </div>
        </div>
    );
};
    
export default ShareForm;

