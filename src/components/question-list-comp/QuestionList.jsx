import React, { useState } from 'react';
import "./QuestionList.css"
import Question from "../question/Question"
import DeleteMes from "../messages/DeleteMes";
import Button from "../button/Button";
import axios from "axios";

//component for dispalying current quiz question for form preview

const QuestionList = (props) => {
    const [id] = useState(props.id || 0);
    const [quiz] = useState(props.quiz || []);
    const [question, setQuestion] = useState(props.question || []);
    const [isVisible, setIsVisible] = useState(true);
    const [deleteFlag, setDeleteFlag] = useState(false);
  
    const handleDeletionConfirmed = () => {
        axios.delete(`http://localhost:8080/question/${question.id}`);
    
        setIsVisible(false);
        setDeleteFlag(true);
    };
  
    const handleDeletionNotConfirmed = () => {
        setDeleteFlag(false);
    };
  
    const handleEdit = () => {
        setIsVisible(false);
    };
  
    const handleDeletion = () => {
        setDeleteFlag(true);
    };
  
    const handleQuestionEdit = (questionData) => {
        setIsVisible(true);
        setQuestion(questionData);
    };
  
    const handleQuestionClose = () => {
        setIsVisible(true);
    };
  
    return (
        <div>
            {isVisible ? (
            <div className="question-frame">
                <div className="content">
                <div className="question-heading">
                    <h3>Question</h3>
                    <div className="buttons">
                        <Button onClick={handleEdit} style={{ width: '70px', padding: '5px' }}>Edit</Button>
                        <Button onClick={handleDeletion} style={{ width: '70px', padding: '5px' }}>Delete</Button>
                    </div>
                </div>
                <h2 className="question-text">{question.text}</h2>
    
                {question.options.map((option, index) => (
                    <div key={index}>
                        <div className="question-option">
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={option.correct}/>
                            </div>
                            <p className={`opt-text${option.correct ? ' selected' : ''}`}>{option.text}</p>
                        </div>
                    </div>
                ))}
                </div>
    
                {deleteFlag ? (
                <div>
                    <DeleteMes onDeletionConfirmed={handleDeletionConfirmed} onDeletionNotConfirmed={handleDeletionNotConfirmed} />
                </div>
                ) : null}
            </div>
            ) : (
            deleteFlag ? null : (
                <Question
                id={id}
                quiz={quiz.id}
                onEdit={handleQuestionEdit}
                onClose={handleQuestionClose}
                />
            )
            )}
        </div>
    );
};
  
export default QuestionList;