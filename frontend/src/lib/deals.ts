import { Deal } from "@/types/deal";

export async function getDeal(): Promise<Deal> {
  // Simulating API fetch
  return {
    title: "45 Components - RTS",
    amount: "17 344 EUR",
    company: "SuperCompany Ltd ASA",
    contact: "Peter Elliot",
    saleDate: "01/02/2025",
    owner: "Eric Davies",
    saleType: "Cross-sale to existing customer",
    status: "Open (20%)",
    activities: [
      { date: "04/11/2024", label: "Follow-up call" },
      { date: "01/11/2024", label: "Quote for 45 components" },
      { date: "23/09/2024", label: "Prospect meeting" },
      { date: "22/09/2024", label: "Introduction call" },
    ],
    stakeholders: ["James Vargas", "Lisa Jansson"],
  };
}
