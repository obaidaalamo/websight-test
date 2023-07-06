import { useState } from "react";
import { Model3D } from "../utils/ModelRoboot";
import validator from "validator";

export const Login = () => {
  const [useName, setUseName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validatorState, setValedatorState] = useState<boolean>(false);

  const validatePassword = (value: string) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setValedatorState(false);
    } else {
      setValedatorState(true);
    }
  };
  return (
    <div className="Container">
      <div className="Login Card">
        <div className="UserImage">
          <Model3D />
        </div>
        <div className="User">
          <div className="Title">User Name :</div>
          <div className="InputText">
            <input
              value={useName}
              onChange={(e) => setUseName(e.target.value)}
            />
          </div>
        </div>
        <div className="Password">
          <div className="Title">Password :</div>
          <div className="InputPassword">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="ValidationMs">
              {validatorState === true
                ? "minimum of 8 characters with at least 1 uppercase, 1 lowercase, and 1 special character"
                : ""}
            </div>
          </div>
        </div>
        <div className="ButtonContainer">
          <button onClick={() => validatePassword(password)}>Login</button>
        </div>
      </div>
    </div>
  );
};
