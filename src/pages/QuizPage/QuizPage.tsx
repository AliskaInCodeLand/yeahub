/* eslint-disable @typescript-eslint/no-explicit-any */
import { SettingFlow } from "@/widgets/SettingFlow";
import { useState } from "react";

interface IMockTest {
  complexity?: number[];
  collection?: number;
  limit?: number;
  specialization: number;
}

function QuizPage() {
  const [settingsQuiz, setSettingQuiz] = useState<IMockTest>({
    limit: 1,
    specialization: 11,
  });

  function handleSpecial(special: number) {
    setSettingQuiz((prev) => ({
      ...prev,
      specialization: special,
    }));
  }

  function handleComplexity(el: any) {
    let arrayComplexity = [...(settingsQuiz.complexity || [])];

    switch (el.id) {
      case "1":
        if (arrayComplexity.includes(1)) {
          arrayComplexity = arrayComplexity.filter(
            (num) => ![1, 2, 3].includes(num)
          );
        } else {
          arrayComplexity = [...arrayComplexity, 1, 2, 3];
        }
        break;
      case "2":
        if (arrayComplexity.includes(4)) {
          arrayComplexity = arrayComplexity.filter(
            (num) => ![4, 5, 6].includes(num)
          );
        } else {
          arrayComplexity = [...arrayComplexity, 4, 5, 6];
        }
        break;
      case "3":
        if (arrayComplexity.includes(7)) {
          arrayComplexity = arrayComplexity.filter(
            (num) => ![7, 8].includes(num)
          );
        } else {
          arrayComplexity = [...arrayComplexity, 7, 8];
        }
        break;
      case "4":
        if (arrayComplexity.includes(9)) {
          arrayComplexity = arrayComplexity.filter(
            (num) => ![9, 10].includes(num)
          );
        } else {
          arrayComplexity = [...arrayComplexity, 9, 10];
        }
        break;
      default:
        arrayComplexity = [];
    }
    arrayComplexity.sort((a, b) => a - b);

    setSettingQuiz((prev) => ({
      ...prev,
      complexity: arrayComplexity,
    }));
  }
  function handleCount() {
    setSettingQuiz((prev) => ({
      ...prev,
      limit: prev.limit ? prev.limit+1 : 1,
    }));
  }

  return (
    <>
      <SettingFlow
        settingsQuiz={settingsQuiz}
        handleSpecial={handleSpecial}
        handleComplexity={handleComplexity}
        handleCount={handleCount}
      />
    </>
  );
}

export default QuizPage;
