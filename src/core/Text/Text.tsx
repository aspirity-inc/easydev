import {ReactNode, CSSProperties} from 'react';
import { Box } from "../Box";
import {container} from "./Text.css.ts";

export interface CustomStyles extends CSSProperties {
  "--color": string;
}

type TextProps = {
  children: ReactNode | string | ReactNode[];
  color?: string;
  tag: string;
}

export const Text = ({ children, tag, color, ...props } : TextProps) => {
  const styles = {
    color,
  }
 
  return (
    <Box>
      <Box
        tag={tag || "span"}
        className={container}
        style={styles}
        {...props}
      >
        {children}
      </Box>
    </Box>
  )
};
