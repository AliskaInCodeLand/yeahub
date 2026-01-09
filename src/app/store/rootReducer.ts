import baseApi from "@/shared/api/baseApi";
import answerReducer from '@/features/answers/api/answerSlice';
import quizReducer from '@/features/quiz/quizSlice';

export const rootReducer = {
    [baseApi.reducerPath] : baseApi.reducer,
    quiz: quizReducer,
    answer: answerReducer,
}
