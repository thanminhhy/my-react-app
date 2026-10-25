function LoginButton(props) {
  const { emailRef } = props;
  return (
    <>
      <input type="text" ref={emailRef} />
      <button onClick={props.onClick}>Login</button>
    </>
  );
}
export default LoginButton;
