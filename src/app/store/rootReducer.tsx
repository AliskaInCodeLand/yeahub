import { combineReducers } from "@reduxjs/toolkit";
import answerReducer from "../../entities/quiz/quizAnswerSlice";
import quizReducer from "../../entities/quiz/quizSlice";
import baseApi from "../../shared/api/baseApi";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  quiz: quizReducer,
  answer: answerReducer,
});
