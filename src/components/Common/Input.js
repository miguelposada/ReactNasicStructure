import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
