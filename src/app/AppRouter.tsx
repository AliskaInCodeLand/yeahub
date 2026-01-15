import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "../pages/MainPage";
import { QuizSettingPage } from "../pages/QuizSettingPage";
import QuizPage from "../pages/QuizPage/ui/OuizPage";
import CompletedQuizPage from "../pages/CompletedQuizPage/ui/CompletedQuizPage";
import ListQuizPage from "../pages/ListQuizPage/ui/ListQuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/interview-preparation", element: <QuizSettingPage /> },
      { path: "/quiz", element: <QuizPage /> },
      { path: "/completed_quiz", element: <CompletedQuizPage/> },
      { path: "/list_quiz", element: <ListQuizPage /> },
    ]
  },
]);


export default router;
