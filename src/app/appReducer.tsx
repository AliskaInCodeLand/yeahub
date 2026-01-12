import { combineReducers } from "@reduxjs/toolkit";
import answerReducer from "@/features/answers/answerSlice";
import quizReducer from "@/features/quiz/quizSlice";
import baseApi from "@/shared/api/baseApi";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  quiz: quizReducer,
  answer: answerReducer,
});
