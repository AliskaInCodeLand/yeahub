import type { IMockTest } from "@/entities/interview-preparation/model/types";
import { SettingFlow } from "@/widgets/ui/SettingFlow/SettingFlow";
import { useState } from "react";

export function QuizSettingPage() {
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

