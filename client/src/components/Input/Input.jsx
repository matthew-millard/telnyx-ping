import React, { useState } from "react";
import css from "./Input.module.css";

function Input({ type, label, id, required, name, value, onChange, extraInformation }) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleBlur(event) {
    if (!value.trim() && event.target.name !== "addressTwo") {
      setErrorMessage(<i>Required</i>);
    } else {
      setErrorMessage("");
    }
  }

  return (
    <div className={css.inputContainer}>
      <div className={css.inputLabel}>
        <label htmlFor={id}>{label}</label>
        <small id={`${id}-error`} className={`${"errorMessage"} ${css.errorMessage}`}>
          {errorMessage}
        </small>
      </div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        required={required}
        aria-describedby={`${label}-error`}
      />
      {extraInformation && <small>{extraInformation}</small>}
    </div>
  );
}

export default Input;
