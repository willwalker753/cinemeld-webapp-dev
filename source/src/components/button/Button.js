import React from "react";
import "./button.css";

/*
Button
    probably returns a button

    props
        styleType (string)  "primary" | "surface"
*/

const Button = ({
    styleType,
    className="",
    children,
    ...rest
}) => {
    return (
        <button
            className={`button-base button-${styleType} ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;