import React from "react";

const Button = ({ onclick, children }) => {
  return <Button onClick={onclick}>{children}</Button>;
};

export default Button;
