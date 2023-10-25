import React from "react";
import css from "./Button.module.css";
import { ClipLoader } from "react-spinners";

function Button({ label, type, loading }) {
  return (
    <button type={type} disabled={loading} className={css.button}>
      {loading ? <ClipLoader /> : label}
    </button>
  );
}

export default Button;
