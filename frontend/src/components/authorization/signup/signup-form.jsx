import { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

export function SignUpForm() {
  const [value, setValue] = useState("");
  const isValid = true;
  // TODO: add validation
  // TODO: add error messages
  // TODO: add error toast
  // const errorTemplate = "Invalid";

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
  };

  return (
    <form
      id="signup-form"
      className="flex flex-column gap-1 p-4 bg-bluegray-300 text-bluegray-900 border-round-md border-solid border-1 border-bluegray-300"
    >
      <span className="flex justify-content-center text-4xl">Login</span>
      <div className="flex flex-column align-items-stretch gap-3 p-3 w-30rem">
        <div className="field flex flex-column">
          <label htmlFor="username">Username</label>
          <InputText
            id="username"
            aria-describedby="username-help"
            pt={{
              root: {
                className:
                  "bg-bluegray-400 text-0 hover:border-bluegray-300 focus:border-bluegray-300",
              },
            }}
          />
          {/* {errorTemplate} */}
        </div>
        <div className="field flex flex-column">
          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            aria-describedby="email-help"
            pt={{
              root: {
                className:
                  "bg-bluegray-400 text-0 hover:border-bluegray-300 focus:border-bluegray-300",
              },
            }}
          />
          {/* {errorTemplate} */}
        </div>
        <div className="field flex flex-column">
          <label htmlFor="password">Password</label>
          <Password
            id="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            toggleMask
            feedback={false}
            pt={{
              input: {
                className:
                  "bg-bluegray-400 text-0 hover:border-bluegray-300 focus:border-bluegray-300 w-full",
              },
              hideIcon: {
                className: "text-0",
              },
              showIcon: {
                className: "text-3",
              },
            }}
          />
        </div>
      </div>
      <div className="flex justify-content-end px-3">
        <Button
          label="submit"
          className="bg-bluegray-500 border-bluegray-400"
          icon="pi pi-check"
          disabled={!isValid}
          type="submit"
          form="signup-form"
          onSubmit={onSubmit}
        />
      </div>
    </form>
  );
}
