import React, { useState, useEffect } from 'react';
import FormHeader from "../../components/header/FormHeader";
import TabBar from "../../components/tabs/TabBar";
import Quiz from "../../components/quiz/Quiz";
import TabBarItem from "../../components/tabs/TabBarItem";
import StatisticsTable from "../../components/stat_table/StatisticsTable";
import ShareForm from "../../components/share-form/ShareForm"
import { defaultQuiz } from "../../components/mock/Mock";
import axios from "axios";
import Button from "../../components/button/Button";
import "./QuizPage.css"
import { useParams } from "react-router-dom";
 
// creating or modifying quiz

const QuizPage = (props) => {
    const [quiz, setQuiz] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const {slug: code} = useParams();

    useEffect(() => {
        if (code === 'create') {
            setQuiz(null);
        }
        else {
            axios.get(`http://localhost:8080/quiz/edit/${code}`)
                .then((res) => {
                    setQuiz(res.data);
            });
        }
        
    }, [code]);

    const handleClick = () => {
        if (!quiz.quizName || !quiz.quizDescription) {
            alert('Quiz name and description are required.');
            return;
        }
        setIsVisible(false);
    };

    const handleEdit = (data) => {
        setQuiz(data);
    };

    const createQuiz = async () => {
        try {
        const response = await axios.post("http://localhost:8080/quiz/", {
            name: '',
            description: '',
        });
        setQuiz(response.data);
        } catch (error) {
        console.log(error);
        }
    };

    if (quiz == null) {
        return (
        <div>
            {isVisible ? (
            <div>
                <FormHeader onClick={createQuiz} buttonName='Start' />
                <TabBar>
                <TabBarItem label="Questions" activeTab={true}>
                    <div className="frame">
                    <p className="text-justify">Welcome to Quizli Creator, a powerful tool designed to help you craft
                        interactive quizzes that engage your audience, challenge their knowledge,
                        and promote a fun learning experience. Whether you're an educator, a content creator,
                        or simply someone who enjoys testing their knowledge, our Quizli Creator has got you covered!</p>
                    <p className="text-justify">With our intuitive interface, creating a quiz has never been easier.
                        Once you've created your quiz, you can easily share it with others.
                        Track the performance of your quiz with comprehensive analytics,
                        including completion rates, enabling you to evaluate the effectiveness
                        of your quiz and make data-driven improvements.</p>
                    <p className="text-justify">Our Quiz Creator is not just about testing knowledge; it's about creating
                        an interactive and immersive learning experience. Use it to design quizzes
                        for educational purposes, team-building activities, training sessions,
                        or simply for some friendly competition among friends. The possibilities are endless!</p>
                    <p className="text-justify">Start creating your quiz today and embark on a journey of knowledge discovery.
                        Let our Quiz Creator be your trusted companion in engaging, challenging,
                        and fostering learning in an entertaining and enjoyable way.</p>
                    </div>
                </TabBarItem>
                <TabBarItem label="Statistics">
                    <div className="frame">
                    <p className="text-justify">To get statistics, create quiz using 'Start' and share it using 'Send'.</p>
                    </div>
                </TabBarItem>
                </TabBar>
            </div>
            ) : (
            <div>
                <ShareForm
                quiz={quiz}
                onBack={() => setIsVisible(true)}
                />
            </div>
            )}
        </div>
        );
    } else {
        return (
        <div>
            {isVisible ? (
            <div>
                <FormHeader onClick={handleClick} buttonName='Send' />
                <TabBar>
                <TabBarItem label="Questions" activeTab={true}>
                    <Quiz
                        quiz={quiz}
                        onEdit={(data) => handleEdit(data)}
                    />
                </TabBarItem>
                <TabBarItem label="Statistics">
                    <StatisticsTable quiz={quiz} />
                </TabBarItem>
                </TabBar>
            </div>
            ) : (
            <div>
                <ShareForm
                    quiz={quiz}
                    onBack={() => setIsVisible(true)}
                />
            </div>
            )}
        </div>
        );
    }
};

export default QuizPage;