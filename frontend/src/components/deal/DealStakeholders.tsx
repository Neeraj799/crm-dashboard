const DealStakeholders = ({ stakeholders }: { stakeholders: string[] }) => {
  return (
    <div className="space-y-2 pt-4 border-t border-gray-200">
      <div className="text-black font-semibold mb-2">Stakeholders</div>

      {stakeholders.map((name, index) => (
        <p key={index} className="text-sm text-gray-800 truncate">
          {name}
        </p>
      ))}
    </div>
  );
};

export default DealStakeholders;
