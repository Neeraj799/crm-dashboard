import React from "react";
type Activity = {
  date: string;
  label: string;
};

const DealActivities = ({ activities }: { activities: Activity[] }) => {
  return (
    <div>
      <div className="text-black mb-3 font-semibold">Activities</div>

      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:justify-between text-sm mb-2"
        >
          <span className="text-gray-500">{activity.date}</span>
          <span className="sm:w-40 text-blue-600 hover:underline cursor-pointer">
            {activity.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DealActivities;
