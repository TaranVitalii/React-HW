import { useState } from "react";

function useValue() {
  const [value, setValue] = useState("");
  return {
    value,
    setValue,
    onChange: e => setValue(e.target.value)
  };
}
export default useValue;
