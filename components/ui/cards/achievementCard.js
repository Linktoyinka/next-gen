import React from "react";

const AchievementCard = ({date, title, desc, key}) => {
  return (
    <div key={key} className="bg-[#1A1A1A] rounded-lg">
      <p className="px-5 py-3">{date}</p>

      <div className="px-5 py-5 2xl:py-9 bg-[#1F1F1F]">
        <h3>{title}</h3>
      </div>

      <p className="p-5">
        {desc}
      </p>
    </div>
  );
};

export default AchievementCard;
