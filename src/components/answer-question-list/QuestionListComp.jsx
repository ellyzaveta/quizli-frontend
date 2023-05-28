import React, { useState } from 'react';
import "./QuestionListComp.css"

//component for displaying cur question in the submition form and handling user choice

const QuestionListComp = (props) => {
    
    const [question, setQuestion] = useState(props.question || null);
  
    const handleOptionChange = (index) => {
        const newOptions = question.options.map((o, i) => {
            if (i === index) {
                o.correct = !o.correct;
            } else {
                o.correct = false;
            }
            return o;
        });
    
        setQuestion({
            ...question,
            options: newOptions
        });
    
        props.onAnswerChange(question);
    };
  
    return (
        <div>
            <div className="question-frame">
                <div className="content">
                    <div className="question-heading">
                        <h3>Question</h3>
                    </div>
                    <h2 className="question-text">{question.text}</h2>
                    {question.options.map((option, index) => (
                    <div key={index}>
                        <div className="question-option">
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                checked={option.correct}
                                onChange={() => handleOptionChange(index)}
                            />
                            </div>
                                <p className={`opt-text${option.correct ? ' selected' : ''}`}>
                                    {option.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
  
export default QuestionListComp;