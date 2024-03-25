import React from "react";
import { useState } from "react";

export const Operation = "decrease" || "increase";

const Quantifier = ({
  removeProductCallback,
  handleUpdateQuantity,
  productId,
}) => {
  const [value, setValue] = useState(1);

  const reduce = () => {
    try {
      handleUpdateQuantity(productId, "decrease");
      setValue((prevState) => {
        const updatedValue = prevState - 1;
        if (updatedValue === 0) {
          removeProductCallback(productId);
        }
        return updatedValue;
      });
    } catch (error) {
      console.log(error);
    }
  };
  const increase = () => {
    try {
      handleUpdateQuantity(productId, "increase");

      setValue((prevState) => prevState + 1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="button"
        value="-"
        onClick={reduce}
        className=" cursor-pointer"
      />
      <input
        type="number"
        step="1"
        min="1"
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value);
          if (!isNaN(newValue)) {
            setValue(newValue);
          }
        }}
      />
      <input
        type="button"
        value="+"
        onClick={increase}
        className=" cursor-pointer"
      />
    </div>
  );
};

export default Quantifier;
