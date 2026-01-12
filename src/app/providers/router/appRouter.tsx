import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import ListQuizPage from "../../../pages/ListQuizPage/ui/Page";
import QuizPage from "../../../pages/Quiz/ui/Page";
import MainPage from "@/pages/Main/ui/Page";
import PublicQuizPage from "@/pages/PublicQuizPage/ui/Page";
import CompletedQuizPage from "@/pages/CompletedQuizPage/ui/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/quiz", element: <QuizPage /> },
      { path: "/public_quiz", element: <PublicQuizPage /> },
      { path: "/completed_quiz", element: <CompletedQuizPage /> },
      { path: "/list_quiz", element: <ListQuizPage /> },
    ],
  },
]);

export default router;
