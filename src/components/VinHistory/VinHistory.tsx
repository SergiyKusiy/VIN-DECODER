import styles from "./VinHistory.module.scss";

interface Props {
  history: string[];
  onSelect: (vin: string) => void;
}

export const VinHistory = ({ history, onSelect }: Props) => {
  if (!history.length) return null;

  return (
    <div className={styles.history}>
      <h3 className={styles.title}>Recent VINs</h3>
      <ul className={styles.list}>
        {history.map((vin, idx) => (
          <li key={idx}>
            <button className={styles.item} onClick={() => onSelect(vin)}>
              {vin}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
