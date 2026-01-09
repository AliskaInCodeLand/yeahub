import { configureStore } from "@reduxjs/toolkit";
import { newMockApi } from "../../entities/api/newMockApi";
import answerReducer from "../../features/answers/api/answerSlice";
import quizReducer from "../../features/quiz/quizSlice";

export const store = configureStore({
  reducer: {
    [newMockApi.reducerPath]: newMockApi.reducer,
    quiz: quizReducer,
    answer: answerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newMockApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
