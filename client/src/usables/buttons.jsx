import React from "react";

const NeuButton = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="px-6 py-2 font-medium bg-[#272757] text-white w-fit transition-all shadow-[3px_3px_0px_black] cursor-pointer hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        {text}
      </button>
    </a>
  );
};

export default NeuButton;
