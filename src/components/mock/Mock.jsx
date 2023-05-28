
//mock data used for testing visual performance

export const mockQuestions = [
    { id: 1, 
        quizId: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
        options: [{text: 'Luctus venenatis lectus magna', isCorrect: false },
        {text: 'Luctus venenatis lectus magna', isCorrect: false},  
        {text: 'Luctus venenatis lectus magna', isCorrect: true}]
    },
    { id: 2, 
        quizId: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
        options: [{text: 'Luctus venenatis lectus magna', isCorrect: false },
        {text: 'Luctus venenatis lectus magna', isCorrect: false},  
        {text: 'Luctus venenatis lectus magna', isCorrect: true}]},
    { id: 3, 
        quizId: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
        options: [{text: 'Luctus venenatis lectus magna', isCorrect: false },
        {text: 'Luctus venenatis lectus magna', isCorrect: false},  
        {text: 'Luctus venenatis lectus magna', isCorrect: true}]},
];


export const mockQuestionsSave = [
    { id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
        options: [{text: 'Luctus venenatis lectus magna', isCorrect: false },
        {text: 'Luctus venenatis lectus magna', isCorrect: false},  
        {text: 'Luctus venenatis lectus magna', isCorrect: true}]
    },
    { id: 2, 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
        options: [{text: 'Luctus venenatis lectus magna', isCorrect: false },
        {text: 'Luctus venenatis lectus magna', isCorrect: false},  
        {text: 'Luctus venenatis lectus magna', isCorrect: true}]},
    { id: 3, 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
        options: [{text: 'Luctus venenatis lectus magna', isCorrect: false },
        {text: 'Luctus venenatis lectus magna', isCorrect: false},  
        {text: 'Luctus venenatis lectus magna', isCorrect: true}]},
    { id: 4, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
            options: [{text: 'Luctus venenatis lectus magna', isCorrect: false },
            {text: 'Luctus venenatis lectus magna', isCorrect: false},  
            {text: 'Luctus venenatis lectus magna', isCorrect: true}]},
]

export const question =  {id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
    options: [{text: 'Luctus venenatis lectus magna', isCorrect: false },
    {text: 'Luctus venenatis lectus magna', isCorrect: false},  
    {text: 'Luctus venenatis lectus magna', isCorrect: true}]};


export const users = [
    {   
        id: 1, 
            ip: "192.168.0.1",
            score: 10,
            quiz: "quiz"
    },
    {   
        id: 2, 
            ip: "172.16.0.1",
            score: 5,
            quiz: "quiz"},
    { 
        id: 3, 
            ip: "169.254.0.1",
            score: 2,
            quiz: "quiz"
    },
];


export const requestData = {
        id: 1,
        quizName: null,
        quizDesc: null,
        url: "https://mockquiz.com",
        code: "mock123"
    };

export const quiz = {
    id: 1,
    quizName: "mocked Quiz",
    quizDesc: "mocked quiz desc",
    url: "url",
    code: "123456"
}

export const defaultQuiz = {
    id: 2,
    quizName: null,
    quizDesc: null,
    url: "https://mockquiz.com",
    code: "mock123"
};

