function App() {
  return (
    <div>
      <div> 
        <br/>
        <div className="topbar">
          <div className="logoname column1">
            <img className="logo" src="assets/receipt.png" alt="Expense Snap Logo"/>
            <h3>Expense Snap</h3>
          </div>
          <div className="topbtn">
            <button type="button" className="login">Log In</button>
            <button type="button">Sign Up</button>
          </div>
        </div>
        <br/>
      </div>

    <body>
      <a href="user.html">user</a>
      <h1>EasiPeasi Expense Snap</h1>
      <div className="frontpage">
        <div> 
          <h2>The ultimate financial tool for budgeting and tracking your monthly expenses. 
          </h2>
          <h3>With EasiPeasi Expense Snap, managing your finances has never been easier! Simply upload an image of your receipts, and our intelligent scanning technology will extract key information, helping you uncover insightful trends in your spending habits.
          </h3>
        </div>
        <img src="assets/receipt.png" alt="Demo"/>
      </div>
      
      <div className="feature-list">
          <div className="feature-card">
              <img className="featureicon" src="assets/notes.png" alt="Tracking Icon"/> 
              <h4>Step 1: Track</h4>
              <p>Effortlessly keep tabs on your monthly expenses by letting us automatically extract details from your receipts. Visualize your spending trends over time.</p>
          </div>
          <div className="feature-card">
              <img className="featureicon" src="assets/tag.png" alt="Tracking Icon"/> 
              <h4>Step 2: Organize</h4>
              <p>Tag your expenses into customizable groups such as dining, groceries, transportation, and entertainment, making it easier to see where your money goes.</p>
          </div>
          <div className="feature-card">
              <img className="featureicon" src="assets/budget.png" alt="Tracking Icon"/> 
              <h4>Step 3: Budget</h4>
              <p>Gain insights into your spending patterns and see exactly where your money goes. Stay on top of your finances and make informed spending decisions.
              </p>
          </div>
      </div>
      <h4>Take control of your financial future with EasiPeasi Expense Snap! Start tracking your spending today to make smarter financial decisions tomorrow.
      </h4>
      <div className="botbtn">
        <button className="botbtn">Sign Up</button>
      </div>
      <br/>
    </body>

    <footer>
      <p> Designed, Created, and Implemented by Emily, Annie, Seungha, and Ivy.
      </p>
    </footer>
      </div>
  );
}
export default App;
