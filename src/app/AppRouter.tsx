import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import ListQuizPage from "../pages/ListQuizPage/ListQuizPage";
import QuizPage from "../pages/QuizPage/QuizPage";
import PublicQuizPage from "../pages/publicQuizPage/publicQuizPage";
import MainPage from "../pages/MainPage/MainPage";
import CompletedQuizPage from "../pages/CompletedQuizPage/CompletedQuizPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <MainPage/> },
      { path: "/quiz", element: <QuizPage/> },
      { path: "/public_quiz", element: <PublicQuizPage/> },
      { path: "/completed_quiz", element: <CompletedQuizPage/> },
      { path: "/list_quiz", element: <ListQuizPage/> },
    ],
  },
]);

export default router;
