import styles from './styles.module.css'

export default function Skeleton({ width = "100%", height = "24px", borderRadius = "8px" }) {
  return (
    <div
      className={styles.skeleton}
      style={{ width, height, borderRadius }}
    />
  );
}