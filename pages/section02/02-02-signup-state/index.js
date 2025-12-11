import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    //* 1. validation
    if (email.includes("@") === false) {
      setEmailError("wrongEmail");
    } else {
      alert("congratuation");
    }
    //* 2. transfer

    //* 3. alert
    alert("Congraturation");
  }
  return (
    <div>
      Email: <input onChange={onChangeEmail} type="text" />
      <div>{emailError}</div>
      Password: <input onChange={onChangePassword} type="password" />
      <button>SignUp</button>
    </div>
  );
}
