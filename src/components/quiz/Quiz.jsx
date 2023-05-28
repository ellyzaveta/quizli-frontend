import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import Question from "../question/Question";
import editIcon from "./icons/edit-icon2.svg";
import QuestionList from "../question-list-comp/QuestionList";
import { mockQuestions } from "../mock/Mock";
import { mockQuestionsSave } from "../mock/Mock";
import logo from "./icons/logo.svg";
import axios from "axios";

import "./Quiz.css";

//component for rendering quiz details and question list

const Quiz = (props) => {
    const [quiz, setQuiz] = useState(props.quiz);
    const [showComponent, setShowComponent] = useState(false);
    const [questions, setQuestions] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        
        if (!quiz.quizName || !quiz.quizDescription) {
            alert('Quiz name and description are required.');
            return;
        }
        
        setShowComponent(true);

        axios.put("http://localhost:8080/quiz/", {
            id: quiz.id,
            quizName: quiz.quizName,
            quizDescription: quiz.quizDescription,
            code: quiz.code,
            url: quiz.url
        }).then((res)=>{
            console.log(res.data)
            setQuiz(res.data);
            if(props.onEdit) {
                props.onEdit(res.data);
            }
        }) 
       
    };

    useEffect(() => {
        setQuiz(props.quiz);
        if(quiz.quizName != null) setShowComponent(true);
    }, [props.quiz]);

    useEffect(() => {
        
        axios.get("http://localhost:8080/question/" + quiz.id).then((res)=>{
            setQuestions(res.data)
        }) 

    }, [questions]);

    const setQuizName = (e) => {
        e.preventDefault();
        setQuiz({
            ...quiz,
            quizName: e.target.value,
        });
    };

    const setQuizDesc = (e) => {
        e.preventDefault();
        setQuiz({
            ...quiz,
            quizDescription: e.target.value,
        });
    };

    return (
        <div className="container">
        {showComponent ? (
            <div className="title">
                <div className="title-button">
                    <h2 className="quiz-name">{quiz.quizName}</h2>
                    <img
                        onClick={() => setShowComponent(false)}
                        src={editIcon}
                        alt="edit"
                        style={{ width: "25px", height: "25px", marginBottom: "5px" }}
                    />
                </div>
                <p>{quiz.quizDescription}</p>
            </div>
        ) : (
        <div className="question-form-top">
            <input
                value={quiz.quizName}
                onChange={(e) => setQuizName(e)}
                type="text"
                className="question-form-top-name"
                placeholder="Quiz name"
            />
            <input
                value={quiz.quizDescription}
                onChange={(e) => setQuizDesc(e)}
                type="text"
                className="question-form-top-desc"
                placeholder="Quiz description"
            />
            <Button onClick={(e) => submit(e)}>Set</Button>
        </div>
        )}
        <Question quiz={quiz.id} />
        {questions.map((question) => (
            <div key={question.id}>
            <QuestionList
                id={question.id}
                quiz={quiz.id}
                question={question}
            />
            </div>
        ))}
        <div className="form-header-logo-buttom">
            <img src={logo} alt="logo" style={{ width: "75px", height: "60px" }} />
            <h2>QUIZLI</h2>
         </div>
    </div>
    );
};

export default Quiz;
