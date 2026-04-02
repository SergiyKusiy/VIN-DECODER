export const validateVin = (vin: string): string | null => {
  if (!vin) return "VIN is required";

  if (vin.length > 17) {
    return "VIN must be at most 17 characters";
  }

  if (!/^[A-HJ-NPR-Z0-9]+$/i.test(vin)) {
    return "Invalid VIN format";
  }

  return null;
};
