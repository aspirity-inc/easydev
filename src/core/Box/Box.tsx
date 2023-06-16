import {createElement, CSSProperties, ReactNode} from "react";
import {cx} from "@linaria/core";

type BoxProps = {
  children: ReactNode | string | ReactNode[];
  tag?: string;
  className?: string;
  style?: CSSProperties;
}

export const Box = ({ children, tag, className, ...props } : BoxProps) => {
  return createElement(
    tag || "div",
    { className: cx(className), ...props },
    children,
  )
};
