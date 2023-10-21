import React, { useState } from "react";

function Input({ type, label, id, name, value, onChange }) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleBlur() {
    if (!value.trim()) {
      setErrorMessage(`${label} is required`);
    } else {
      setErrorMessage("");
    }
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        aria-describedby={`${id}-error`}
      />
      <small id={`${id}-error`} className="errorMessage">
        {errorMessage}
      </small>
    </div>
  );
}

export default Input;
