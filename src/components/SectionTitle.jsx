import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h4 className="text-xl font-semibold ">{title}</h4>
      <div className="bg-slate-400 w-16 mt-1 mb-3 h-1 rounded-lg"></div>
    </>
  );
};

export default SectionTitle;
