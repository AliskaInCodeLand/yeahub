import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Question, QuizState } from './model/types';

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