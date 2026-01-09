import {useLocation} from 'react-router-dom';
import { useGetQuestionsQuery } from '@/entities/questions/api/questionsApi';
import { QuestionFlow } from '@/widgets/QuestionFlow/ui/QuestionFlow';



function PublicQuizPage() {
  const location = useLocation();
  const { test } = location.state || {};

  const limit = test?.limit

  const { data } = useGetQuestionsQuery({
    limit: limit,
    complexity: test.complexity,
    specialization: test.specialization,
  });

  console.log("data?.questions: ", data?.questions);

  return (
    <>
      <QuestionFlow questions={data?.questions} />
    </>
  );
}

export default PublicQuizPage;