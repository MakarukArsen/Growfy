import React from "react";
import classes from "./Button.module.scss";
const Button = ({ children, color, ...props }) => {
    return (
        <button className={`${classes.button} ${color === "blue" ? classes.blue : color === "black" ? classes.black : ""}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
