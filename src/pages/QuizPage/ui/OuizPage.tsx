import { useLocation } from "react-router-dom";
import { QuestionFlow } from "../../../widgets/ui/quiz/QuestionFlow/QuestionFlow";
import { useGetQuestionsQuery } from "../../../entities/interview-preparation/interview-preparationaApi";

function QuizPage() {
  const location = useLocation();
  const { test } = location.state || {};

  const limit = test?.limit;

  const { data } = useGetQuestionsQuery({
    limit: limit,
    complexity: test.complexity,
    specialization: test.specialization,
  });

  return (
    <>
      <QuestionFlow questions={data?.questions} />
    </>
  );
}

export default QuizPage;
