import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ISpecializations {
    createdAt: string
    description: "string"
    id: number
    imageSrc: string | null
    title: string
    updatedAt: string
}

export interface ISkills {
    createdAt: string
    description: string
    id: number
    imageSrc: string | null
    specializations: ISpecializations[]
    title: string
    updatedAt: string
}

export interface Question {
    code: string |null
    complexity: number
    createdAt: string
    createdBy: {id: string, username: string}
    createdById: string
    description: string
    id: number
    imageSrc: string |null
    keywords: string[]
    longAnswer: string 
    questionSkills: ISkills[]
    questionSpecializations: ISpecializations[]
    rate: number
    shortAnswer: string 
    status: string
    title: string 
    updatedAt: string
    updatedBy: {id: string, username: string}
    updatedById: string
}

export interface QuizState {
    quiz: Question[];
}

export const initialState: QuizState = {
    quiz: [],
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuiz: (state, action: PayloadAction<Question>) => {
            state.quiz.push(action.payload);
        },
        resetQuiz: (state) => {
            state.quiz = []
        }
    },
});

export const { setQuiz, resetQuiz} = quizSlice.actions;
export default quizSlice.reducer;