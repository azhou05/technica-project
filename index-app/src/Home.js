import React from 'react';
import logo from './assets/cats.png';
import track from './assets/research.png';
import UI from './assets/interface.png';
import trend from './assets/stock-market.png'
import graph from './assets/budget.png'
import tag from './assets/tag.png'
import scanner from './assets/scanner.png'
import './index.css';

const Home = () => {
  return (
    <div>
      <div> 
        <br/>
        <div className="topbar">
          <div className="logoname column1">
            <img className="logo" src={logo} alt="Expense Snap Logo"/>
            <h3>Expense Snap</h3>
          </div>
          <div className="topbtn">
            <button type="button" className="login button-home">Log In</button>
            <button type="button" className="button-home">Sign Up</button>
          </div>
        </div>
        <br/>
      </div>

    <body>
      <h1>EasiPeasi Expense Snap</h1>
      <div className="frontpage">
        <div> 
          <h2>The ultimate financial tool for budgeting and tracking your monthly expenses. 
          </h2>
          <h3>With EasiPeasi Expense Snap, managing your finances has never been easier! 
          <br/>
          Simply upload an image of your receipts and our intelligent scanning technology will extract key information helping you uncover insightful trends in your spending habits. 
          </h3>
        </div>
        <img src={logo} alt="Demo"/>
      </div>
      
      <h1>Key Features</h1>
      <div className="feature-list">
          <div className="feature-card">
              <img className="featureicon" src={scanner} alt="Scan Icon"/> 
              <h4>Receipt Scanning</h4>
              <p>Users can upload images of their receipts which utilizes intelligent scanning technology to extract key information automatically, such as item details, prices, and dates.
              </p>
          </div>
          <div className="feature-card">
              <img className="featureicon" src={track} alt="Research Icon"/> 
              <h4>Expense Tracking</h4>
              <p>Users can monitor their expenses over weekly and monthly views, with the app calculating total expenses and balances for each period to provide a clear understanding of their financial status and spending patterns.
              </p>
          </div>
          <div className="feature-card">
              <img className="featureicon" src={tag} alt="Tag Icon"/> 
              <h4>Categorize Expenses</h4>
              <p>Users can categorize expenses into customizable groups (e.g., dining, groceries, transportation, entertainment), making it easier to analyze where their money is going.
              </p>
          </div>
          <div className="feature-card">
              <img className="featureicon" src={graph} alt="Graph Icon"/> 
              <h4>Charts and Graphs</h4>
              <p>Visual representations of spending data through charts and graphs help users quickly identify trends and patterns in their spending habits.
              </p>
          </div>
          <div className="feature-card">
              <img className="featureicon" src={trend} alt="Trends Icon"/> 
              <h4>Insightful Trend Analysis</h4>
              <p>The app highlights important trends based on the scanned receipt data, enabling users to make informed decisions about their finances.
              </p>
          </div>
          <div className="feature-card">
              <img className="featureicon" src={UI} alt="Interface Icon"/> 
              <h4>User Friendly Interface</h4>
              <p>An intuitive and easy-to-navigate interface ensures that users can quickly access features and information, making financial management simple and efficient.
              </p>
          </div>
      </div>
      <h4 class="caption">Take control of your financial future with EasiPeasi Expense Snap! 
        <br/>
        Start tracking your spending today to make smarter financial decisions tomorrow.
      </h4>
      <div className="botbtn">
        <button className="botbtn button-home">Sign Up</button>
      </div>
      <br/>
    </body>

    <footer>
      <img className="banner" src={logo} alt="4 cats"/>
      <p> Designed, Created, and Implemented by Emily, Annie, Seungha, and Ivy.
      </p>
    </footer>
      </div>
  );
}
export default Home;
