function Deposit() {
  const [newuser, setNewuser] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [currentuser, setCurrentuser] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const [deposit, setDeposit] = React.useState("");
  const ctx = React.useContext(UserContext);

  let disable = true;
  if (deposit) disable = false;

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

  //This function makes a user deposit if input number is not negative or !NAN. Sets new user balace
  function makeDeposit() {
    if (!isNaN(deposit) && deposit > 0) {
      let newBalance = Number(balance) + Number(deposit);
      setBalance(newBalance);
      setDeposit("");
      setStatus(`$${deposit} successfully deposited into account`);
      let isDeposit = false;

      // The code below checks for the created account user and sets the new balance to the user
      for (var i = 0, length = ctx.users.length; i < length; i++) {
        if (ctx.users[i].name == currentuser) {
          console.log(`${currentuser} deposited $${deposit}`);
          console.log(Number(newBalance));
          ctx.users[i].balance = Number(newBalance);

          isDeposit = true;
        }
      }

      //Making all changes to state if deposit is successful
      if (isDeposit) {
        setStatus(`$${deposit} successfully deposited into account`);
        setTimeout(() => setStatus(""), 3000);
        setDeposit("");
        setBalance(Number(newBalance));
      }
    } else if (!isNaN(deposit)) {
      setStatus("Error: Deposit amount must be greater than $0.00.");
      setDeposit("");
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("Error: Deposit amount must be a number.");
      setDeposit("");
      setTimeout(() => setStatus(""), 3000);
    }
    return;
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="dark"
      header="Deposit"
      status={status}
      body={
        <>
          Current Balance: ${balance}
          <br />
          <br />
          Deposit Amount:
          <br />
          <input
            type="input"
            className="form-control"
            id="deposit"
            placeholder="$0.00"
            value={deposit}
            onChange={(e) => setDeposit(e.currentTarget.value)}
          />
          <br />
          <>
            <button
              type="submit"
              className="btn btn-success"
              disabled={disable}
              onClick={makeDeposit}
            >
              Deposit
            </button>
          </>
        </>
      }
    />
  );
}
