import { useState } from "react";

const KEY = "vin_history";

const loadHistory = (): string[] => {
  try {
    const stored = localStorage.getItem(KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const useVinHistory = () => {
  const [history, setHistory] = useState<string[]>(loadHistory);

  const addVin = (vin: string) => {
    const updated = [vin, ...history.filter((v) => v !== vin)].slice(0, 3);
    localStorage.setItem(KEY, JSON.stringify(updated));
    setHistory(updated);
  };

  return { history, addVin };
};
