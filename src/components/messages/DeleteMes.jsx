import React, { useState } from 'react';
import "./DeleteMes.css"
import Button from "../button/Button";

//component for question deletion confirmation

const DeleteMes = (props) => {
    const [question] = useState(props.question);
    const [visible, setVisible] = useState(true);

    const handleYesClick = () => {
        setVisible(false);
        props.onDeletionConfirmed();
    };

    const handleNoClick = () => {
        setVisible(false);
        props.onDeletionNotConfirmed();
    };

    return (
        <div>
        {visible ? (
            <div className="content-mes">
            <div className="mes">
                <h3>Are you sure you want to delete this question?</h3>
                <div className="buttons">
                <Button onClick={handleYesClick}>Yes</Button>
                <Button onClick={handleNoClick}>No</Button>
                </div>
            </div>
            </div>
        ) : null}
        </div>
    );
};

export default DeleteMes;