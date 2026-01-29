"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Sale } from "@/types/sales";

export const useSales = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5; // keep it simple

  const fetchSales = async (pageNumber = page) => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await api.get("/api/leads", {
        params: { page: pageNumber, limit },
      });

      setSales(data.data);
      setTotalPages(data.pagination.totalPages);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to fetch sales");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSales(page);
  }, [page]);

  return {
    sales,
    loading,
    error,
    page,
    totalPages,
    setPage,
    refetch: fetchSales,
  };
};
