import React from "react";

function Input({ type, label, id, name, value }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} value={value} />
    </div>
  );
}

export default Input;
