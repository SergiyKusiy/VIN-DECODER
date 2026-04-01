import type { VehicleVariablesResponse } from "@/types/vin";

const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";

export const decodeVin = async (vin: string) => {
  const res = await fetch(`${BASE_URL}/decodevin/${vin}?format=json`);
  const data = await res.json();

  return data;
};

export const getVariables = async (): Promise<VehicleVariablesResponse> => {
  const res = await fetch(`${BASE_URL}/GetVehicleVariableList?format=json`);
  if (!res.ok) throw new Error("Failed to fetch vehicle variables");
  return res.json();
};
