function Nav() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
        <div className="container-fluid">
          {/* <Link className="navbar-brand"  to="/">
          Home
        </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-auto">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  data-toggle="tooltip"
                  title="Bad Bank homepage"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link
                  className="nav-link"
                  to="/CreateAccount/"
                  data-toggle="tooltip"
                  title="Create your account here"
                >
                  Create Account
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link
                  className="nav-link"
                  to="/deposit/"
                  data-toggle="tooltip"
                  title="Make a deposit here"
                >
                  Deposit
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link
                  className="nav-link "
                  to="/withdraw/"
                  data-toggle="tooltip"
                  title="Make a withdraw here."
                  aria-current="page"
                >
                  Withdraw
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link
                  className="nav-link "
                  to="/alldata/"
                  data-toggle="tooltip"
                  title="See user information"
                  aria-current="page"
                >
                  All Data
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
