import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Input = ({ children }: Props) => {
  return (
    <div>
      <h1>Input</h1>
      {children}
    </div>
  );
};
