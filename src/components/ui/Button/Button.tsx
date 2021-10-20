import * as React from "react";
import {combineClasses} from "../../../utils";
import styles from "./Button.module.scss";

export type ButtonProps = {
  theme?:
    | "solid-primary"
    | "solid-secondary"
    | "line-primary"
    | "light-secondary"
    | "line";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={combineClasses(
        styles.button,
        styles[props.theme || "solid-primary"],
        className
      )}>
      {children}
    </button>
  );
};
