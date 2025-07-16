import { useState } from "react";

export function useInput(
  initialValue?: string
): [string, React.ChangeEventHandler<HTMLInputElement>] {
  const [value, setValue] = useState(initialValue ?? "");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return [value, onChange];
}
