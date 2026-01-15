export interface IMockTest {
  complexity?: number[];
  collection?: number;
  limit?: number;
  specialization: number;
}

export interface IMockTestProps {
    settingsQuiz: IMockTest,
    setSettingQuiz: React.Dispatch<React.SetStateAction<IMockTest>>
}
