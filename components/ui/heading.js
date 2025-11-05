import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="bg-[#1A1A1A] p-5 md:p-8 rounded-xl space-y-2 ">
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
