import { useState } from "react";
import { validateVin } from "@/utils/validateVin";
import styles from "./VinForm.module.scss";

interface Props {
  onSubmit: (vin: string) => void;
}

export const VinForm = ({ onSubmit }: Props) => {
  const [vin, setVin] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateVin(vin);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    onSubmit(vin);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={vin}
        onChange={(e) => setVin(e.target.value.toUpperCase())}
        placeholder="Enter VIN code"
        maxLength={17}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Decode
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};
