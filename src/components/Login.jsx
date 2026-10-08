import { useState } from "react";
import LogoutButton from "./button/LogoutButton";
import LoginButton from "./button/LoginButton";

//3. Tạo component Login
function Login() {
  const [isToggle, setIsToggle] = useState(false);

  function handleLogoutClick() {
    setIsToggle(!isToggle);
  }

  function handleLoginClick() {
    setIsToggle(!isToggle);
  }
  function renderButton() {
    let button;
    if (isToggle) {
      button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={handleLoginClick} />;
    }

    //****Note: an element variable is simply a javascript variable that stores a react element
    //for example: button is a js variable that stores two react elements are <LogoutButton/> and <LoginButton/>
    //components will return react element such as <div>Login</div> or <button>Login</button>
    return button;
  }
  return <div className="App">{renderButton()}</div>;
}

export default Login;
