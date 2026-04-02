import type { VinResultItem } from "@/types/vin";
import styles from "./VinResults.module.scss";

interface Props {
  results: VinResultItem[];
}

export const VinResults = ({ results }: Props) => {
  const filtered = results.filter((item) => item.Value);

  if (!filtered.length) return <p className={styles.empty}>No results found</p>;

  return (
    <section className={styles.results}>
      <h2 className={styles.title}>VIN Results</h2>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <li key={item.Variable} className={styles.item}>
            <span className={styles.variable}>{item.Variable}</span>
            <span className={styles.value}>{item.Value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
