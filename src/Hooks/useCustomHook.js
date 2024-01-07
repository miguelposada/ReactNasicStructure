import { useState } from "react";

const useCustomHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue((preValue) => preValue + 1);
  };
  return { value, increment };
};

export default useCustomHook;
