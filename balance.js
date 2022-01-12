function Balance() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>Balance Component</h3>
      <p>This is the user balance</p>

      {/* User Context being rendered to the home page */}
      <p>{JSON.stringify(ctx)}</p>
    </div>
  );
}
