function Home() {
  // UserContext contains the user information
  return (
    <div className = "home-component-container">
      {/* <h3>Welcome to the site -happy to see you</h3> */}
      <br/>

      {/* User Context being rendered to the home page */}
      <Card
        bgcolor="light"
        txtcolor="black"
        header="Bad Bank React Project"
        title="Create an account to start"
        // text="Create an account to start"
        body={
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
        }
      />
    </div>
  );
}
