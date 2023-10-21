import React from "react";

function Select({ id, name, label, options }) {
  // Find the first option that is selected
  const defaultValue = options.find((option) => options.selected)?.value;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} defaultValue={defaultValue}>
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
