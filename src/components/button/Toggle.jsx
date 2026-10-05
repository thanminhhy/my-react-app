function Toggle(props) {
  return (
    <div>
      <button onClick={props.onToggle}>{props.isToggle ? "Tắt" : "Bật"}</button>
    </div>
  );
}

export default Toggle;
