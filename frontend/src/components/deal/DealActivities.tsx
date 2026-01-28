import React from "react";
type Activity = {
  date: string;
  label: string;
};

const DealActivities = ({ activities }: { activities: Activity[] }) => {
  return (
    <div>
      {activities.map((activity, index) => (
        <div key={index} className="flex justify-between text-sm">
          <span className="text-gray-500">{activity.date}</span>
          <span className="text-blue-600 hover:underline cursor-pointer">
            {activity.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DealActivities;
