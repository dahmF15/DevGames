import React from "react";
import ButtonGradient from "./ButtonGradient";
import ButtonSvg from "./ButtonSvg";

export default function RegularButtons({
  className,
  onClick,
  children,
  px,
  white,
  href,
}) {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 
  ${px || "px-7"} ${white ? text - n - 8 : "text-n-1"} ${className || ""}`;

  const SpanClasses = `relative z-10`;

  const renderButton = () => (
    <button className={classes}>
      <span className={SpanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a className={classes} href={href}>
      <span className={SpanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
}
