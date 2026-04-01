import { useState } from "react";
import { decodeVin } from "@/services/vinApi";
import { VinResults } from "@/components/VinResults/VinResults";
import { VinHistory } from "@/components/VinHistory/VinHistory";
import { VinForm } from "@/components/VinForm/VinForm";
import { useVinHistory } from "@/hooks/useVinHistory";
import type { VinResultItem } from "@/types/vin";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const [results, setResults] = useState<VinResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { history, addVin } = useVinHistory();

  const handleDecode = async (vin: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await decodeVin(vin);
      if (!data.Results?.length) setError(data.Message);
      setResults(data.Results || []);
      addVin(vin);
    } catch {
      setError("Failed to fetch VIN data");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>VIN Decoder</h1>
      <VinForm onSubmit={handleDecode} />
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p className={styles.loading}>Decoding VIN...</p>}
      <VinHistory history={history} onSelect={handleDecode} />
      <VinResults results={results} />
    </main>
  );
};
