import clsx from "clsx";
import React, { FC, ReactNode } from "react";

function WidthContainer({
  children,
  className,
}: {
  children?: JSX.Element | JSX.Element[] | ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx("mx-auto max-w-screen-xl px-2 py-1 md:px-4", className)}
    >
      {children}
    </div>
  );
}

export default WidthContainer;
