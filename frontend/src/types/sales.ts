export type SaleStatus = "Open" | "Lost" | "Sold" | "Stalled";

export type Sale = {
  id: number;
  status: SaleStatus;
  saleDate: string;
  amount: number;
  stage: string;
  nextActivity: string;
  saleName: string;
};
