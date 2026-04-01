import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVariables } from "@/services/vinApi";
import type { VehicleVariable } from "@/types/vin";
import styles from "./VariableDetailsPage.module.scss";

export const VariableDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [variable, setVariable] = useState<VehicleVariable | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVariable = async () => {
      try {
        setLoading(true);
        const data = await getVariables();
        const found = data.Results.find((v) => v.ID === Number(id));
        setVariable(found ?? null);
      } catch {
        setError("Failed to load variable");
      } finally {
        setLoading(false);
      }
    };
    fetchVariable();
  }, [id]);

  if (loading) return <p className={styles.state}>Loading...</p>;
  if (error) return <p className={styles.stateError}>{error}</p>;
  if (!variable) return <p className={styles.state}>Variable not found</p>;

  return (
    <main className={styles.container}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        ← Back
      </button>
      <article className={styles.card}>
        <div className={styles.badge}>ID — {variable.ID}</div>
        <h1 className={styles.name}>{variable.Name}</h1>
        {variable.Description && (
          <p className={styles.description}>{variable.Description}</p>
        )}
      </article>
    </main>
  );
};
