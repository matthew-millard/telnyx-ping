import React from "react";
import css from "./Select.module.css";

function Select({ id, name, label, options, value, onChange }) {
  return (
    <div className={css.selectContainer}>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
