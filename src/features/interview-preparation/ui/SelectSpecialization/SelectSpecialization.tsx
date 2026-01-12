import { useGetSkillsQuery } from "@/entities/api/specializationsApi";
import styles from "./styles.module.css";
import type { IMockTestProps, ISpecializations } from "@/entities/model/types";

const SelectSpecialization = ({settingsQuiz, setSettingQuiz} : IMockTestProps) => {
  const { data, isLoading, isError } = useGetSkillsQuery({
    page: 1,
    limit: 10,
  });

  const specializations = data?.data ?? [];
  const selectedId = settingsQuiz.specialization;

  function onSelect(special: number) {
    setSettingQuiz((prev) => ({
      ...prev,
      specialization: special,
    }));
  }

  if (isLoading) return <p>Загрузка ...</p>;
  if (isError) return <p>Ошибка</p>;
  return (
    <>
      {specializations.map((item: ISpecializations) => (
        <button
          key={item.id}
          className={styles.specialization}
          style={{
            borderColor: selectedId === item.id ? "#6C34FF" : "#BABABA",
          }}
          onClick={() => onSelect(item.id)}
        >
          {item.title}
        </button>
      ))}
    </>
  );
};

export default SelectSpecialization;
