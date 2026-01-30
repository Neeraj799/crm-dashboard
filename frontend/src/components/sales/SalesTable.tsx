"use client";

import { useSales } from "@/hooks/useSales";
import SalesHeader from "./SalesHeader";
import SalesRow from "./SalesRow";
import SalesTabs from "./SalesTabs";
import TableActions from "./TableActions";

const SalesTable = () => {
  const { sales, loading, error, page, totalPages, setPage, refetch } =
    useSales();

  return (
    <div className="relative w-full max-w-5xl rounded-xl border bg-white p-1 shadow-sm overflow-x-auto min-h-[300px]">
      <SalesTabs />

      {error && <div className="p-6 text-sm text-red-500">{error}</div>}

      {!error && (
        <table className="w-full text-sm">
          <SalesHeader />
          <tbody className={loading ? "opacity-50" : ""}>
            {sales.map((sale) => (
              <SalesRow key={sale._id} sale={sale} />
            ))}
          </tbody>
        </table>
      )}

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 text-sm">
          Loading...
        </div>
      )}

      <TableActions onRefresh={refetch} />

      {/* PAGINATION */}
      <div className="flex items-center justify-between px-4 py-3 text-sm text-[#687072]">
        <button
          disabled={page === 1 || loading}
          onClick={() => setPage((p) => p - 1)}
          className="rounded-md border px-3 py-1 disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages || loading}
          onClick={() => setPage((p) => p + 1)}
          className="rounded-md border px-3 py-1 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SalesTable;
