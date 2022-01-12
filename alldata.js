function AllData() {
  const ctx = React.useContext(UserContext);
  {
    /* User Context being rendered to the home page */
  }
  return (
    <div className="all-data-component">
      <h3>All Data Component</h3>
      <br />
      <>
        <Card
          bgcolor="dark"
          txtcolor="warning"
          header={ctx.users.map((user, i) => (
            <li key={i}>
              Current user
              <div>
                Name: {user.name}
                <br />
                Email: {user.email}
                <br />
                Password: {user.password}
                <br />
                Balance: {user.balance}
                <br />
              </div>
            </li>
          ))}
        ></Card>
      </>
    </div>
  );
}
