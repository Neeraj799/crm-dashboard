import React from "react";
type Activity = {
  date: string;
  label: string;
};

const DealActivities = ({ activities }: { activities: Activity[] }) => {
  return (
    <div>
      <div className="text-black mb-4 font-semibold">Activities</div>

      {activities.map((activity, index) => (
        <div key={index} className="flex space-y-2 justify-between text-sm">
          <span className="text-gray-500">{activity.date}</span>
          <span className="w-40 text-blue-600 hover:underline cursor-pointer">
            {activity.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DealActivities;
