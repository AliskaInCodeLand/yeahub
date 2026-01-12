import type { IMockTest } from "@/entities/model/types";
import { SettingFlow } from "@/widgets/interview-preparation/ui/SelectFlow/SelectFlow";
import { useState } from "react";

function QuizPage() {
  
  const [settingsQuiz, setSettingQuiz] = useState<IMockTest>({
    limit: 1,
    specialization: 11,
  });

  return (
    <>
      <SettingFlow  
        settingsQuiz={settingsQuiz}
        setSettingQuiz={setSettingQuiz}
      />
    </>
  );
}

export default QuizPage;
