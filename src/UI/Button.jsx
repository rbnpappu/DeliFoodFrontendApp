import React from "react";
import classes from '../styles/style.module.css'

function Button({ children, handleClick, disabled }) {
    return (
        <button onClick={handleClick} {...children} className={classes.button} disabled={disabled} >{children}</button>
    );
}

export default Button;
