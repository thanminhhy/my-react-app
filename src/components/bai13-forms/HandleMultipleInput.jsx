import { useState } from "react";

function Reservation(props) {
  const [isGoing, setIsGoing] = useState(true);
  const [guest, setGuest] = useState(2);
  console.log(isGoing, guest);

  function renderList(e) {
    const target = e.target;
    console.log(target);
    if (target.type === "checkbox") {
      setIsGoing(target.checked);
    } else {
      setGuest(target.value);
    }
  }

  return (
    <form>
      <label>
        is going
        <input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          onChange={renderList}
        />
      </label>
      <p></p>
      <label>
        is guest
        <input name="guest" type="number" value={guest} onChange={renderList} />
      </label>
    </form>
  );
}

export default Reservation;
