import { ButtonHTMLAttributes, memo } from "react";

import { Icon } from "./Icon";

import "../styles/button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
}

export function ButtonComponent({
  iconName,
  title,
  selected,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      {...rest}
    >
      <Icon
        name={iconName}
        color={selected ? "var(--yellow)" : "var(--white)"}
      />
      {title}
    </button>
  );
}
("");

export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.selected, nextProps.selected);
});
