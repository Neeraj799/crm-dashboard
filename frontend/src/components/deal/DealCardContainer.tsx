"use client";
import { getDeal } from "@/lib/deals";
import React, { useEffect, useState } from "react";
import DealCard from "./DealCard";
import { Deal } from "@/types/deal";

const DealCardContainer = () => {
  const [deal, setDeal] = useState<Deal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeal = async () => {
      try {
        const data = await getDeal();
        setDeal(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // ✅ REQUIRED
      }
    };

    fetchDeal();
  }, []);

  if (loading) return <p className="text-sm text-gray-500">Loading deal…</p>;
  if (!deal) return <p className="text-sm text-red-500">Failed to load deal</p>;

  return (
    <div>
      <DealCard deal={deal} />
    </div>
  );
};

export default DealCardContainer;
