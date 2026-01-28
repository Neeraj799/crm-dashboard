// types/deal.ts
export type Deal = {
  title: string;
  amount: string;
  company: string;
  contact: string;
  saleDate: string;
  owner: string;
  saleType: string;
  status: string;
  activities: {
    date: string;
    label: string;
  }[];
  stakeholders: string[];
};

export type DealTab = "search" | "amount" | "date" | "notes" | "priority";
