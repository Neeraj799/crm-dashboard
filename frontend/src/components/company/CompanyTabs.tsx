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
      <ul className="flex gap-6 text-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <li
              key={tab}
              onClick={() => onChange(tab)}
              className={`py-1 px-3 mb-1 cursor-pointer transition-all duration-200
                ${
                  isActive
                    ? "rounded-full bg-[#D2E4E3] text-teal-700 font-medium"
                    : "text-[#747474] hover:text-gray-700"
                }`}
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
