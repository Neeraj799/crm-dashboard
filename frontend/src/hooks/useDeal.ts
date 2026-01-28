"use client";

import { getDeal } from "@/lib/deals";
import { Deal } from "@/types/deal";
import { useEffect, useState } from "react";

export function useDeal() {
  const [deal, setDeal] = useState<Deal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchDeal = async () => {
      try {
        const data = await getDeal();
        setDeal(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeal();
  }, []);

  return { deal, loading, error };
}
