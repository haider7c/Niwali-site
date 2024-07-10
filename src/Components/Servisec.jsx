import React from "react";

const Servisec = ({ icon, heading, description }) => {
  return (
    <div className="h-[200px] w-[250px] flex flex-col items-center p-3">
      <div className="bg-[#e0dfe4] h-[80px] w-[80px] rounded-full flex justify-center items-center">
        <div className="bg-[#2f8747] h-[60px] w-[60px] rounded-full flex justify-center items-center">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="pt-3">
        <h3 className="font-bold">{heading}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Servisec;
