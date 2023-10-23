import React from "react";

function Select({ id, name, label, options, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
