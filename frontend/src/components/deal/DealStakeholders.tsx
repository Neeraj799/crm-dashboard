import React from "react";

const DealStakeholders = ({ stakeholders }: { stakeholders: string[] }) => {
  return (
    <div>
      {stakeholders.map((name, index) => (
        <p key={index} className="text-sm text-gray-800">
          {name}
        </p>
      ))}
    </div>
  );
};

export default DealStakeholders;
