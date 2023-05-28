import { render, fireEvent } from '@testing-library/react';
import Quiz from './Quiz';

//unit test for testing basic functionality of Quiz component

describe('Quiz component', () => {
    
    test('should render quiz name and description when showComponent is true', () => {
        const { getByText } = render(<Quiz id={1} quizName="Test Quiz" quizDesc="This is a test quiz" showComponent={true} />);
    
        expect(getByText('Test Quiz')).toBeInTheDocument();
        expect(getByText('This is a test quiz')).toBeInTheDocument();
    });
  
    test('should render input fields for quiz name and description when showComponent is false', () => {
        const { getByPlaceholderText } = render(<Quiz />);
    
        expect(getByPlaceholderText('Quiz name')).toBeInTheDocument();
        expect(getByPlaceholderText('Quiz description')).toBeInTheDocument();
    });
  
    test('should update quiz name and description on submit', () => {
        const { getByPlaceholderText, getByText } = render(<Quiz />);
        const quizNameInput = getByPlaceholderText('Quiz name');
        const quizDescInput = getByPlaceholderText('Quiz description');
        const submitButton = getByText('Set');
    
        fireEvent.change(quizNameInput, { target: { value: 'New Quiz Name' } });
        fireEvent.change(quizDescInput, { target: { value: 'New Quiz Description' } });
        fireEvent.click(submitButton);
    
        expect(quizNameInput).toHaveValue('New Quiz Name');
        expect(quizDescInput).toHaveValue('New Quiz Description');
    });
  
});