import React, {forwardRef} from "react";
import classes from './Input.module.css';

const Input = (props, ref) => {
    return (
        <div className={classes.control}>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props} ref={ref} />
        </div>
    );
}


export default forwardRef(Input);