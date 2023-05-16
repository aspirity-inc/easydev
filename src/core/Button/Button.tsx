import { ReactNode, FC } from "react";

type ButtonProps = { children: ReactNode | string | ReactNode[] }

export const Button: FC<ButtonProps> = ({ children, ...props }) => <button {...props}>{children}</button>;

