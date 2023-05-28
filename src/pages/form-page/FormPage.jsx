import React, { useState, useEffect } from "react";
import "./FormPage.css"
import QuestionListComp from "../../components/answer-question-list/QuestionListComp";
import axios from "axios";
import Button from "../../components/button/Button";
import logo from "./images/logo.svg"
import Score from "../../components/score/Score";
import { mockQuestions } from "../../components/mock/Mock";
import { useParams } from "react-router-dom";

//submition quiz form for user 

const FormPage = () => {
    const [quiz, setQuiz] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [userAnswers, setUserAnswers] = useState([]);
    const [userIP, setUserIP] = useState(null);
    const [userScore, setUserScore] = useState(null);
    const [maxScore, setMaxScore] = useState(null);
    const [questions, setQuestions] = useState([]);
  
    const {slug} = useParams();
  
    useEffect(() => {
        setUserIP("193.123.11.3");
    
        axios.get(`http://localhost:8080/quiz/form/${slug}`)
            .then((res) => {
                setQuiz(res.data);
        });
    
        axios.get(`http://localhost:8080/question/${quiz.id}`)
            .then((res) => {
                const fetchedQuestions = res.data;
                fetchedQuestions.forEach((question) => {
                    question.options.forEach((option) => {
                    option.correct = false;
                    });
                });
            setQuestions(fetchedQuestions);
        });
    }, [questions]);

    const handleAnswerChange = (question) => {
        const answer = {
            questionId: question.id,
            options: question.options
        };
      
        setUserAnswers((prevState) => [...prevState, answer]);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();

        const isAnyOptionNotSelected = questions.some((question) => {
            const selectedOptions = userAnswers.find((answer) => answer.questionId === question.id)?.options;
            return !selectedOptions || selectedOptions.length === 0;
        });
        
        if (isAnyOptionNotSelected) {
            alert('Please select an options for all the questions.');
            return;
        }

        axios.post("http://localhost:8080/user/", {
            quizID: quiz.id,
            userAnswer: userAnswers,
            score: userScore,
        }).then((res)=>{
            setMaxScore(res.data.score);
            setUserScore(res.data.maxScore);
            setUserIP(res.data.userIP);
            setIsVisible(false);
        }) 
    };
  
    return (
        <div>
            {isVisible ? (
                <div className="page-content">
                    <div className="title">
                        <div className="title-button">
                            <h2 className="quiz-name">{quiz.quizName}</h2>
                        </div>
                        <p>{quiz.quizDescription}</p>
                    </div>
                    {questions.map(question => (
                    <div key={question.id}>
                        <QuestionListComp
                            id={question.id}
                            quiz={quiz.id}
                            question={question}
                            onAnswerChange={handleAnswerChange}
                        />
                    </div>
                    ))}
                    <Button onClick={(e) => handleSubmit(e)} className={"submit-button"}>Submit</Button>
                    <div className="form-header-logo-buttom">
                        <img src={logo} alt="logo" style={{ width: "75px", height: "60px" }} />
                        <h2>QUIZLI</h2>
                    </div>
                </div>
                ) : (
                    <Score quizName={quiz.quizName} quizDesc={quiz.quizDescription} userScore={userScore} maxScore={maxScore}></Score>
                )}
        </div>
    );
};
  
export default FormPage;
