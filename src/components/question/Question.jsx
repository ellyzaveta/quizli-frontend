import React, { useState, useEffect } from "react";
import './Question.css';
import closeIconBlue from "./icons/close-blue.svg"
import Button from "../button/Button";
import circlesIcon from "./icons/circles-icon.svg"
import axios from "axios";

//component for creating/editing question

const Question = (props) => {
    const [quiz, setQuiz] = useState(props.quiz);
    const [id, setId] = useState(props.id);
    const [question, setQuestion] = useState({
        id: 0,
        text: "",
        options: [
            { text: "", correct: true },
            { text: "", correct: false },
        ],
    });
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
        if (id != null) {
                axios.get("http://localhost:8080/question/per/" + id).then((res) => {
                setQuiz(res.data.quizId);
                setId(res.data.id);
                setQuestion(res.data);
            });
        }
    }, [id]);
  
    const handleOptionChange = (index, value) => {
        const newOptions = [...question.options];
        newOptions[index].text = value;
        setQuestion((prevState) => ({
            ...prevState,
            options: newOptions,
        }));
    };
  
    const handleCheckboxChange = (index) => {
        const newOptions = [...question.options];
        newOptions.forEach((option, i) => {
            if (i === index) {
            option.correct = !option.correct;
            } else {
            option.correct = false;
            }
        });
        setQuestion((prevState) => ({
            ...prevState,
            options: newOptions,
        }));
    };
  
    const handleAddOption = () => {
        setQuestion((prevState) => ({
            ...prevState,
            options: [
            ...prevState.options,
            { text: "", correct: false },
            ],
        }));
    };
  
    const handleRemoveOption = (index) => {
        const newOptions = [...question.options];
        newOptions.splice(index, 1);
        setQuestion((prevState) => ({
            ...prevState,
            options: newOptions,
        }));
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!question.text) {
            alert('Question text is required.');
            return;
        }
        
        const selectedOptions = question.options.filter((option) => option.correct);
        if (selectedOptions.length === 0) {
            alert('One option must be selected as correct.');
            return;
        }
        
        const emptyOptions = question.options.filter((option) => option.text.trim() === '');
        if (emptyOptions.length > 0) {
            alert('Option text cannot be empty.');
            return;
        }
    
        if (id == null) {
            axios.post("http://localhost:8080/question/", {
            quizId: quiz,
            text: question.text,
            options: question.options,
            }).then((res) => {
            console.log(res.data);
            });
        } else {
                axios.put("http://localhost:8080/question/", {
                id: id,
                quizId: quiz,
                text: question.text,
                options: question.options,
            });
        }
  
        if (props.onEdit) {
            setIsVisible(false);
            props.onEdit(question);
            return;
        }
  
        reset();
    };
  
    const reset = () => {
        setQuestion({
            id: 0,
            text: "",
            options: [
            { text: "", correct: true },
            { text: "", correct: false },
            ],
        });
        setIsVisible(true);
    };
  
    const handleClose = (e) => {
        e.preventDefault();
    
        if (props.onClose) {
            props.onClose();
            setIsVisible(false);
        }
    
        reset();
    };
  
    return (
        <div>
            {isVisible ? (
            <div className="question-add">
                <div className="question-bg">
                <div className="content-q">
                    <div className="heading">
                    <h2 className="question-name">Question</h2>
                    <Button
                        onClick={handleClose}
                        style={{ width: "70px", padding: "5px" }}>Close
                    </Button>
                    </div>
                    <input
                    value={question.text}
                    onChange={(e) =>
                        setQuestion((prevState) => ({
                        ...prevState,
                        text: e.target.value,
                        }))
                    }
                    type="text"
                    className="question-name-input"
                    placeholder="Enter question"
                    ></input>
    
                    {question.options.map((option, index) => (
                    <div key={index}>
                        <div className="option-content">
                        <div className="circle-icon">
                            <img
                            src={circlesIcon}
                            alt="icon"
                            style={{ width: "14px", height: "22px" }}
                            />
                        </div>
                        <div className="option">
                            <input
                            type="text"
                            className="option-text"
                            value={option.text}
                            placeholder="Enter option"
                            onChange={(event) =>
                                handleOptionChange(index, event.target.value)
                            }
                            ></input>
                            <div className="option-checkbox">
                            <input
                                type="checkbox"
                                checked={option.correct}
                                onChange={() => handleCheckboxChange(index)}
                            ></input>
                            </div>
                            <div className="option-close">
                            <img
                                onClick={() => handleRemoveOption(index)}
                                src={closeIconBlue}
                                alt="close"
                                style={{ width: "18px", height: "18px" }}
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    <button
                    type="button"
                    onClick={handleAddOption}
                    className="button"
                    >
                    add option+
                    </button>
                </div>
                </div>
                <Button onClick={handleSubmit} className={"button-submit"}>
                Save
                </Button>
            </div>
            ) : null}
        </div>
    );
};
  
export default Question;
     