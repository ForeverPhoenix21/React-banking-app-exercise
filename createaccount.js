function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  let disable = true;
  if (name || email || password) disable = false;

  function Validate() {
    if (!name) {
      setStatus("Error: Name can't be blank");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (name.length < 3) {
      setStatus("Error: Name must be more than 3 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (!email) {
      setStatus("Error: Email can't be blank");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (email.length < 6) {
      setStatus("Error: Not a Valid email");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (!password) {
      setStatus("Error: Password can't be blank");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (password.length < 8) {
      setStatus("Error: Password must be more than 8 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
  function handleCreate() {
    console.log(name, email, password);
    if (!Validate(name, "name")) return;
    if (!Validate(email, "email")) return;
    if (!Validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 200 });
    setShow(false);
    disable = true;
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="dark"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={handleCreate}
              disabled={disable}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success: New Account Created</h5>
            <button type="submit" className="btn btn-primary" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
