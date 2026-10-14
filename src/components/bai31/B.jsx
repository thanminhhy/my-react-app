function RenderData(props) {
  function render() {
    const { data = [] } = props;

    if (data.length > 0) {
      return data.map((item, key) => {
        return (
          <li key={key}>
            <p>- ID: {item.id}</p>
            <p>- Name: {item.name}</p>-<p>Username: {item.username}</p>
            <p>- Email: {item.email}</p>
            <p>
              - Address:
              <br />
              <span>+ Street: {item.address.street}</span>
              <br />
              <span>+ Suite: {item.address.suite}</span>
            </p>
            <p>- Phone: {item.phone}</p>
            <p>- Website: {item.website}</p>
            <p>
              - Company:
              <br />+ Name: {item.company.name}
              <br />+ catchPhrase: {item.company.catchPhrase}
            </p>
          </li>
        );
      });
    }
    return <p>Không có dữ liệu</p>;
  }

  return (
    <div>
      <p>List Items</p>
      <ul>{render()}</ul>
    </div>
  );
}

export default RenderData;
