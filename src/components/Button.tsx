import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isLarge?: boolean;
  onClick: () => void;
}

export function Button({ children, onClick, isLarge = false }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: isLarge ? 210 : 200 / 3,
        height: isLarge ? 45 : 35,
        padding: 2.5,
        margin: 2.5,
        backgroundColor: "#bc5e5e",
        color: "white",
      }}
      className="btn"
    >
      {children}
    </button>
  );
}
