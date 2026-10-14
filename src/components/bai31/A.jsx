import RenderData from "./B";
function A() {
  const data = [
    {
      id: 1,
      name: "Leane Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: { street: "kulas light", suite: "apt, 556" },
      phone: "04923942342",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
      },
    },
    {
      id: 2,
      name: "Ervin Howel",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: { street: "Victor Plains", suite: "Suite 879" },
      phone: "0583239423",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
      },
    },
  ];

  return (
    // Truyền dữ liệu sang component B qua props tên là data
    <div>
      <RenderData data={data} />;
    </div>
  );
}

export default A;
