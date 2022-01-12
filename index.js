const UserContext = React.createContext(null);
const BalContext = React.createContext(null);

function Spa() {
  return (
    <HashRouter>
      <div>
        <h1>Welcome to Bad Bank</h1>

        {/* --- navigation bar --- */}
        <Nav />
        <hr />

        {/* UserContext "Provides" it's values to the listed routes below */}

        <UserContext.Provider
          value={{
            users: [
              // {
              //   name: "",
              //   email: "",
              //   password: "",
              //   balance: 0,
              // },
            ],
          }}
        >

            {/* UserForm "Provides it's values to the listed routes below" */}
            {/* --- routes --- */}
            <Route path="/" exact component={Home} />
            <Route path="/balance/" component={Balance} />
            {/* <Route path="/login/" component={Login} /> */}
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/createaccount/" component={CreateAccount} />
            <Route path="/alldata/" component={AllData} />
            <Route path="/Bankform/" component={BankForm} />
            {/* <Route path="/atm/" component={ATM} /> */}
          
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
