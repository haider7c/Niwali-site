import React from "react";
import PropTypes from "prop-types";

const FramSlidStr = ({ frame }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[12rem] h-[20rem] lg:w-[18rem] lg:h-[18rem] bg-framcol rounded-md mb-5 shadow-lg ">
        <div className="flex justify-center">
          <img
            className="bg-cover rounded-full h-[12rem] mt-3 w-[12rem] object-cover shadow-lg"
            src={frame.image_url + frame.prod_image}
            alt=""
          />
        </div>
        <div className="flex justify-between mx-3">
          <h1 className="text-white text-xl">{frame.prodname}</h1>
          <button className="text-[#5ee547] underline">Shop now</button>
        </div>
        <div>
          <p className="text-white mx-3 my-3">{frame.short_name}</p>
        </div>
      </div>
    </div>
  );
};

FramSlidStr.PropTypes = {
  frame: PropTypes.shape({
    id: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    btntitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default FramSlidStr;
