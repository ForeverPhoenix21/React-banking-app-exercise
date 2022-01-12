function Withdraw() {
  const [newuser, setNewuser] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [currentuser, setCurrentuser] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const ctx = React.useContext(UserContext);

  let disable = true;
  if (withdraw) disable = false;

  //Check if any user is currently logged in
  if (newuser) {
    for (const { name, balance } of ctx.users) {
      console.log(`Current User: ${name}`);
      if (name) {
        setNewuser(false);
        setCurrentuser(name);
        setBalance(balance);
        return;
      }
    }
  }

  // Validates that it is a number and you will not overdraft
  function makeWithdraw() {
    if (!isNaN(withdraw) && withdraw > 0 && withdraw <= balance) {
      let newBalance = Number(balance) - Number(withdraw);
      setBalance(newBalance);
      setWithdraw("");
      setStatus(`$${withdraw} was successfully withdrawn from your account`);
      let validWithdraw = false;

      // The code below checks for the created account user and sets the new balance to the user
      for (var i = 0, length = ctx.users.length; i < length; i++) {
        if (ctx.users[i].name == currentuser) {
          console.log(`${currentuser} withdrew $${withdraw}`);
          console.log(Number(newBalance));
          ctx.users[i].balance = Number(newBalance);

          validWithdraw = true;
        }
      }

      //Making all changes to state
      if (validWithdraw) {
        setStatus(`$${withdraw} successfully withdrawn from account`);
        setTimeout(() => setStatus(""), 3000);
        setWithdraw("");
        setBalance(Number(newBalance));
      }
    } else if (withdraw > balance) {
      setStatus(
        `Error: Withdraw amount must be less than $${balance}. Please try again.`
      );
      setWithdraw("");
      setTimeout(() => setStatus(""), 3000);
    } else if (!isNaN(withdraw)) {
      setStatus(
        "Error: Withdraw amount must be greater than $0.00. Please try again."
      );
      setWithdraw("");
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("Error: Withdraw amount must be a number. Please try again.");
      setWithdraw("");
      setTimeout(() => setStatus(""), 3000);
    }
    return;
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="dark"
      header="Withdraw"
      status={status}
      body={
        <>
          Current Balance: ${balance}
          <br />
          <br />
          Withdraw Amount:
          <br />
          <input
            type="input"
            className="form-control"
            id="deposit"
            placeholder="$0.00"
            value={withdraw}
            onChange={(e) => setWithdraw(e.currentTarget.value)}
          />
          <br />
          <>
            <button
              type="submit"
              className="btn btn-danger"
              disabled={disable}
              onClick={makeWithdraw}
            >
              Withdraw
            </button>
          </>
        </>
      }
    />
  );
}
