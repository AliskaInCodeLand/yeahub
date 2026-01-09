import { useGetSkillsQuery } from "@/entities/specialization/specializationApi";
import styles from "./styles.module.css";

interface Ispecialization {
  createdAt?: string;
  createdBy?: string | null;
  description: string;
  id: number;
  imageSrc: string | null;
  title: string;
  updatedAt: string;
}

const SelectSpecialization = ({ selectedId, onSelect }) => {
  const { data, isLoading, isError } = useGetSkillsQuery({
    page: 1,
    limit: 10,
  });

  const specializations = data?.data ?? [];

  if (isLoading) return <p>Загрузка ...</p>;
  if (isError) return <p>Ошибка</p>;
  return (
    <>
      {specializations.map((item: Ispecialization) => (
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
