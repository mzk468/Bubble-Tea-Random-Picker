import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function CheckBox({ children }: Props) {
  return (
    <>
      <input
        className="form-check-input"
        type="checkbox"
        style={{ margin: 5 }}
      />
      <label
        className="form-check-label"
        htmlFor="inlineCheckbox3"
        style={{ fontSize: 12, padding: 2.5 }}
      >
        {children}
      </label>
    </>
  );
}
