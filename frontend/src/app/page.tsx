import CompanyCard from "@/components/company/CompanyCard";
import DashboardLayout from "../components/layout/DashboardLayout";
import SalesTable from "@/components/sales/SalesTable";
import DealCardContainer from "@/components/deal/DealCardContainer";

const page = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:flex gap-4 px-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-3/4 flex flex-col gap-4 pl-10">
          <CompanyCard />
          <SalesTable />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:w-1/4">
          <DealCardContainer />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default page;
