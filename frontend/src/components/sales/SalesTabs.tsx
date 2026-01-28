const tabs = ["Activities", "Contacts", "Projects", "Sales", "Requests"];

const SalesTabs = () => {
  return (
    <div className="flex gap-6 px-6 py-2 text-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={
            tab === "Sales"
              ? "rounded-full bg-teal-100 px-4 py-1 text-teal-700"
              : "text-gray-500"
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SalesTabs;
