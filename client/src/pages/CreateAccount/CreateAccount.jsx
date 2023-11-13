import React from "react";
import { Form } from "../../components";
import css from "./CreateAccount.module.css";

function CreateAccount() {
  return (
    <div>
      <div className={css.pageContainer}>
        <div className={css.formContainer}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
