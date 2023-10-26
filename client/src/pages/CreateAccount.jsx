import React from "react";
import { Form } from "../components";
import css from "./CreateAccount.module.css";

function CreateAccount() {
  return (
    <div className={css.createAccountContainer}>
      <h1 className={css.title}>Create Account</h1>
      <Form />
    </div>
  );
}

export default CreateAccount;
