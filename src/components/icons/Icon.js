import * as icons from "./raw";
import { cloneElement } from "react";

const Icon = ({
  icon,
  size,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style,
}) => {
  const IconComponent = icons[icon];
  return cloneElement(IconComponent, {
    className,
    onMouseEnter,
    onMouseLeave,
    onClick,
    style,
    height: size ?? 24,
    width: size ?? 24,
  });
};

export default Icon;
