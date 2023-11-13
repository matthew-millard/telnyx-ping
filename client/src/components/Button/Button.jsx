import React from "react";
import css from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Button({ label, type, loading, url }) {
  const navigate = useNavigate();
  function handleClick(url) {
    if (url) navigate(url);
  }
  return (
    <button type={type} disabled={loading} className={css.button} onClick={() => handleClick(url)}>
      {loading ? <ClipLoader color="white" size="24px" data-testid="loading-spinner" /> : label}
    </button>
  );
}

export default Button;
