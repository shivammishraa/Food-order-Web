import React from "react";

function Button({ children, textOnly, className, ...props}) {
  let cssClass = textOnly ? "text-button" : "button";
  cssClass += "  " + className;

  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
