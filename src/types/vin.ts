export interface VinResultItem {
  Variable: string;
  Value: string | null;
}

export interface DecodeVinResponse {
  Results: VinResultItem[];
  Message: string;
}

export interface VehicleVariable {
  ID: number;
  Name: string;
  Description?: string;
}

export interface VehicleVariablesResponse {
  Count: number;
  Results: VehicleVariable[];
}
