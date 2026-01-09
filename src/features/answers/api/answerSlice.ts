import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Answer {
    questionId: number;
    selectedOption: string;
}

export interface AnswerState {
    answers: Record<number, string>;
}

export const initialState: AnswerState = {
    answers: {},
};

const answerSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        selectAnswer: (state, action: PayloadAction<Answer>) => {
            state.answers[action.payload.questionId] = action.payload.selectedOption;
        },
        allResetAnswers: (state) => {
            state.answers = {}
        }
    },
});

export const { selectAnswer, allResetAnswers} = answerSlice.actions;
export default answerSlice.reducer;