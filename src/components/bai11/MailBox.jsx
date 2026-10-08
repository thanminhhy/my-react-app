function MailBox(props) {
  const xx = props.xx;
  return (
    <div>
      <h1>Hello!</h1>
      {xx.length > 0 && <h2>You have {xx.length} unread messages.</h2>}
    </div>
  );
}

export default MailBox;
