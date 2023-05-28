import './App.css';
import React from 'react';
import QuizPage from './pages/quiz-page/QuizPage'
import FormPage from './pages/form-page/FormPage';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

const App = () => {
    return (       
        <Router>
            <Routes> 
                <Route path="quiz/:slug" element={<QuizPage />} />
                <Route path="form/:slug" element={<FormPage />} />
            </Routes>
        </Router>
    );
}

export default App;
