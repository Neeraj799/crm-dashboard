import { TabType } from "./types";

interface CompanyTabsProps {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

const tabs: TabType[] = [
  "Company",
  "Activities",
  "Contacts",
  "Sales",
  "Requests",
];

const CompanyTabs: React.FC<CompanyTabsProps> = ({ activeTab, onChange }) => {
  return (
    <div className="mt-6 border-b">
      <ul
        className="
          flex gap-2 sm:gap-6
          overflow-x-auto
          whitespace-nowrap
          pb-2
          text-sm
          scrollbar-hide
        "
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <li
              key={tab}
              onClick={() => onChange(tab)}
              className={`
                cursor-pointer transition-all duration-200
                px-4 py-2
                ${
                  isActive
                    ? "rounded-full bg-[#D2E4E3] text-teal-700 font-medium"
                    : "text-[#747474] hover:text-gray-700"
                }
              `}
            >
              {tab}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyTabs;
