import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVariables } from "@/services/vinApi";
import type { VehicleVariable } from "@/types/vin";
import styles from "./VariablesPage.module.scss";

export const VariablesPage = () => {
  const [variables, setVariables] = useState<VehicleVariable[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVariables = async () => {
      try {
        setLoading(true);
        const data = await getVariables();
        setVariables(data.Results);
      } catch {
        setError("Failed to load variables");
      } finally {
        setLoading(false);
      }
    };
    fetchVariables();
  }, []);

  if (loading) return <p className={styles.state}>Loading variables...</p>;
  if (error) return <p className={styles.stateError}>{error}</p>;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Vehicle Variables</h1>
      <p className={styles.count}>{variables.length} variables available</p>
      <div className={styles.grid}>
        {variables.map((v) => (
          <Link key={v.ID} to={`/variables/${v.ID}`} className={styles.card}>
            <span className={styles.cardId}>#{v.ID}</span>
            <span className={styles.cardName}>{v.Name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
};
