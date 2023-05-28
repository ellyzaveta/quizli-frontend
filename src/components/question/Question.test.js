import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Question from './Question';

describe('Question Component', () => {
    const mockProps = {
        quiz: 'quizId',
        id: 1,
        onEdit: jest.fn(),
        onClose: jest.fn(),
    };

    beforeEach(() => {
        render(<Question {...mockProps} />);
    });

    test('renders question input field', () => {
        const questionInput = screen.getByPlaceholderText('Enter question');
        expect(questionInput).toBeInTheDocument();
    });

    test('handles question input change', () => {
        const questionInput = screen.getByPlaceholderText('Enter question');
        fireEvent.change(questionInput, { target: { value: 'Test question' } });
        expect(questionInput.value).toBe('Test question');
    });

    test('renders option input fields', () => {
        const optionInputs = screen.getAllByPlaceholderText('Enter option');
        expect(optionInputs.length).toBe(2); // Assuming initial options length is 2
    });

    test('handles option input change', () => {
        const optionInput = screen.getAllByPlaceholderText('Enter option')[0];
        fireEvent.change(optionInput, { target: { value: 'Option 1' } });
        expect(optionInput.value).toBe('Option 1');
    });

    test('adds new option', () => {
        const addOptionButton = screen.getByText('add option+');
        fireEvent.click(addOptionButton);
        const optionInputs = screen.getAllByPlaceholderText('Enter option');
        expect(optionInputs.length).toBe(3); // Assuming a new option is added
    });

    test('removes option', () => {
        const removeOptionButton = screen.getAllByAltText('close')[0];
        fireEvent.click(removeOptionButton);
        const optionInputs = screen.getAllByPlaceholderText('Enter option');
        expect(optionInputs.length).toBe(1); // Assuming an option is removed
    });

    test('calls handleSubmit when Save button is clicked', () => {
        const saveButton = screen.getByText('Save');
        fireEvent.click(saveButton);
        expect(mockProps.onEdit).toHaveBeenCalled();
    });

    test('calls handleClose when Close button is clicked', () => {
        const closeButton = screen.getByText('Close');
        fireEvent.click(closeButton);
        expect(mockProps.onClose).toHaveBeenCalled();
    });
});