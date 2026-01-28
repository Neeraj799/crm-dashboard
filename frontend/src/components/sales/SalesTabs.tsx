const tabs = ["Activities", "Contacts", "Projects", "Sales", "Requests"];

const SalesTabs = () => {
  return (
    <div className="border-b">
      <div
        className="
          flex gap-3 px-4 py-2 text-sm
          overflow-x-auto whitespace-nowrap
          scrollbar-hide
          sm:gap-6 sm:px-6
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-shrink-0 rounded-full px-4 py-1 transition
              ${
                tab === "Sales"
                  ? "bg-teal-100 text-teal-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SalesTabs;
