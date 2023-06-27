import { CSSProperties, ReactNode } from "react";
import { title, titleType } from "./style.css.ts";
import { Box } from "../Box";
import { cx } from "@linaria/core";

type TitleVariant = keyof typeof title;
type TitleType = keyof typeof titleType;

type TitleProps = {
  children: ReactNode | string | ReactNode[];
  variant?: TitleVariant;
  className?: string;
  style?: CSSProperties;
  type?: TitleType;
}

export const Title = ({ children, variant, className, type, ...props }: TitleProps) => {
  return (
    <Box>
      <Box
        tag={variant || "h1"}
        className={cx(className, title[variant || 'h1'], titleType[type || 'default'])}
        {...props}
      >
        {children}
      </Box>
    </Box>
  )
}
