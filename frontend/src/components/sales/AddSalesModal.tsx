"use client";

import { useState } from "react";
import api from "@/lib/axios";
import { toast } from "react-toastify";

const AddSaleModal = ({
  open,
  onClose,
  onSuccess,
}: {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) => {
  const [saleName, setSaleName] = useState("");
  const [amount, setAmount] = useState("");
  const [stage, setStage] = useState("");
  const [nextActivityDate, setNextActivityDate] = useState("");
  const [status, setStatus] = useState("Open");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!saleName.trim()) return setError("Sale name is required");
    if (+amount <= 0) return setError("Amount must be greater than 0");
    if (+stage < 0 || +stage > 100)
      return setError("Stage must be between 0 and 100");
    if (!nextActivityDate) return setError("Next activity date is required");

    setError("");
    setLoading(true);

    try {
      await api.post("/api/leads", {
        saleName,
        amount: Number(amount),
        stage: Number(stage),
        nextActivityDate,
        status,
      });

      toast.success("Sale added successfully");

      onSuccess();
      onClose();
    } catch (err: any) {
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message || "Failed to create sale");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-[#687072]">Add Sale</h2>

        <form onSubmit={handleSubmit} className="space-y-3 text-[#687072]">
          <input
            placeholder="Sale name"
            value={saleName}
            onChange={(e) => setSaleName(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Stage (%)"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="date"
            value={nextActivityDate}
            onChange={(e) => setNextActivityDate(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>Open</option>
            <option>Lost</option>
            <option>Sold</option>
            <option>Stalled</option>
          </select>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button
              disabled={loading}
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSaleModal;
