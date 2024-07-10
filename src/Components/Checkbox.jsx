import React from "react";
import { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
