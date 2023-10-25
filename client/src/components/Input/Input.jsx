import React, { useState } from "react";
import css from "./Input.module.css";

function Input({ type, label, id, required, name, value, onChange }) {
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
      <label htmlFor={id}>{label}</label>
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

      <small id={`${id}-error`} className="errorMessage">
        {errorMessage}
      </small>
    </div>
  );
}

export default Input;
