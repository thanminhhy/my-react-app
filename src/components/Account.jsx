import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Account() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({ name: "", loggedIn: false });
  };

  //2. Tạo component Account
  return (
    <div className="App">
      Account
      <span>Xin chào, {user.name}</span>
      {user.loggedIn && <button onClick={handleLogout}>Đăng xuất</button>}
    </div>
  );
}

export default Account;
