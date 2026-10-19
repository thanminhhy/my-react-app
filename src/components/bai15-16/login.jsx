import { useState } from "react";
import ErrorForm from "./Error/Error";

function Login(props) {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");

  // const [errorEmail, setErrorEmail] = useState("");
  // const [errorPass, setErrorPass] = useState("");
  // console.log(email, pass);
  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;

    setInputs((state) => ({ ...state, [nameInput]: value }));
  };

  // function handleEmail(e) {
  //   setEmail(e.target.value);
  // }

  // function handlePass(e) {
  //   setPass(e.target.value);
  // }

  function handleForm(e) {
    e.preventDefault();

    let errorsSubmit = {};
    let flag = true;

    if (inputs.email == "") {
      errorsSubmit.email = "Vui lòng nhập email";
      flag = false;
    }
    if (inputs.pass == "") {
      errorsSubmit.pass = "Vui lòng nhập pass";
      flag = false;
    }
    console.log(flag);
    if (!flag) {
      setErrors(errorsSubmit);
    } else {
      setErrors({});
    }
  }

  // function renderError() {
  //   if (Object.keys(errors).length > 0) {
  //     return Object.keys(errors).map((key, index) => {
  //       return <li key={index}>{errors[key]}</li>;
  //     });
  //   }
  // }

  return (
    <div>
      <ErrorForm errors={errors} />
      <form onSubmit={handleForm}>
        <label>Email: </label>
        <input type="text" name="email" onChange={handleInput} />
        <br />
        <label>Password: </label>
        <input type="password" name="pass" onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
