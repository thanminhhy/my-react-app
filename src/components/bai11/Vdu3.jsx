import { useState } from "react";
function Vdu3() {
  function Warning(props) {
    if (!props.warning) {
      return null;
    }
    return (
      <div>
        Warning!
        {props.children}
      </div>
    );
  }

  function Login() {
    const [showWarning, setShowWarning] = useState(true);

    function handleToggleClick() {
      setShowWarning(!showWarning);
    }

    return (
      <div>
        <Warning warning={showWarning}>
          <button onClick={handleToggleClick}>
            {showWarning ? "Hide" : "Show"}
          </button>
        </Warning>
      </div>
    );
  }
  return <div>{Login()}</div>;
}

export default Vdu3;
