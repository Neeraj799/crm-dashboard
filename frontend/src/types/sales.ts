export type SaleStatus = "Open" | "Lost" | "Sold" | "Stalled";

export interface Sale {
  _id: string;
  saleName: string;
  status: "Open" | "Lost" | "Sold" | "Stalled";
  amount: number;
  stage: number;
  nextActivityDate: string;
  createdAt: string;
}
