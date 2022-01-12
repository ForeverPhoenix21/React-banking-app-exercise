function BankForm() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>Bank Form component</h3>
      <p>This is the BankForm page</p>

      {/* User Context being rendered to the home page */}
      <p>{JSON.stringify(ctx)}</p>
    </div>
  );
}
