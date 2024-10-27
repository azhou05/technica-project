import React, { useState, useEffect, useCallback } from 'react';
import './user.css';

const UserPage = () => {
  // State management
  const [activeSection, setActiveSection] = useState('main');
  const [expenses, setExpenses] = useState([]);
  const [receipts, setReceipts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Load initial data on component mount
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const savedReceipts = JSON.parse(localStorage.getItem('receipts')) || [];
    setExpenses(savedExpenses);
    setReceipts(savedReceipts);
    showDashboard();
  }, []);

  // Navigation functions
  const openNav = () => {
    setSidebarOpen(true);
    document.documentElement.style.setProperty('--sidebar-width', '250px');
  };

  const closeNav = () => {
    setSidebarOpen(false);
    document.documentElement.style.setProperty('--sidebar-width', '0');
  };

  const showDashboard = () => {
    setActiveSection('main');
  };

  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
    closeNav();
  };

  // Expense handling functions
  const saveExpense = useCallback((expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  }, [expenses]);

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const expense = {
      date: formData.get('expense-date'),
      amount: formData.get('expense-amount'),
      category: formData.get('expense-category'),
    };

    saveExpense(expense);
    e.target.reset();
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  // Receipt handling functions
  const saveReceipt = useCallback((receiptData) => {
    const updatedReceipts = [...receipts, receiptData];
    setReceipts(updatedReceipts);
    localStorage.setItem('receipts', JSON.stringify(updatedReceipts));
  }, [receipts]);

  const handleReceiptUpload = (e) => {
    e.preventDefault();
    const file = e.target.querySelector('#receipt-upload').files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const receiptData = event.target.result;
        saveReceipt(receiptData);
        setSelectedFile(null);
        e.target.reset();
        alert('Receipt uploaded successfully!');
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a receipt to upload.');
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // Styles for conditional rendering
  const getContentStyle = () => ({
    marginLeft: sidebarOpen ? 'var(--sidebar-width)' : '0',
    transition: 'margin-left 0.3s'
  });

  return (
    <div>
      <header>
        <button 
          className="openbtn" 
          onClick={openNav} 
          style={{ display: sidebarOpen ? 'none' : 'block' }}
        >
          ☰
        </button>
        <button 
          className="closebtn" 
          onClick={closeNav}
          style={{ display: sidebarOpen ? 'block' : 'none' }}
        >
          ✖
        </button>
        <div className="topbtn">
          <button onClick={() => alert("Logging out...")}>Log Out</button>
        </div>
      </header>

      <div 
        className="sidebar" 
        style={{ width: sidebarOpen ? 'var(--sidebar-width)' : '0' }}
      >
        <div className="logoname">
          <img className="logo" src="assets/receipt.png" alt="Expense Snap Logo" />
          <h3>Expense Snap</h3>
        </div>
        <h2>EasiPeasi</h2>
        <button onClick={() => toggleSection('main')}>Analytics</button>
        <button onClick={() => toggleSection('add-expense')}>Add Expense</button>
        <button onClick={() => toggleSection('expense-history')}>Expense History</button>
        <button onClick={() => toggleSection('receipt-history')}>Receipt History</button>
      </div>

      <div id="main" style={getContentStyle()}>
        {activeSection === 'main' && (
          <>
            <h2>Analytics Overview</h2>
            <p>Here is a summary of your spending through the past week, month, and year.</p>
          </>
        )}
      </div>

      <div className="main-content" style={getContentStyle()}>
        {activeSection === 'add-expense' && (
          <section id="add-expense">
            <h2>Add a New Expense</h2>
            <form id="expense-form" onSubmit={handleExpenseSubmit}>
              <label htmlFor="expense-date">Date:</label>
              <input type="date" id="expense-date" name="expense-date" required />

              <label htmlFor="expense-amount">Amount:</label>
              <input type="number" id="expense-amount" name="expense-amount" required />

              <label htmlFor="expense-category">Category:</label>
              <select id="expense-category" name="expense-category">
                <option value="food">Food</option>
                <option value="transportation">Transportation</option>
                <option value="entertainment">Entertainment</option>
                <option value="utilities">Utilities</option>
                <option value="other">Other</option>
              </select>

              <button type="submit">Submit</button>
            </form>

            <h2>Add a New Receipt</h2>
            <form id="receipt-form" onSubmit={handleReceiptUpload}>
              <label htmlFor="receipt-upload">Upload Receipt:</label>
              <input 
                type="file" 
                id="receipt-upload" 
                name="receipt-upload" 
                accept="image/*" 
                onChange={handleFileSelect}
                style={{ display: 'none' }}
              />
              <button 
                type="button" 
                onClick={() => document.getElementById('receipt-upload').click()}
              >
                Choose File
              </button>
              <span>{selectedFile ? selectedFile.name : 'No file chosen'}</span>
              <button type="submit">Submit</button>
            </form>
          </section>
        )}

        {activeSection === 'expense-history' && (
          <section id="expense-history">
            <h2>Your Expense History</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.date}</td>
                    <td>${parseFloat(expense.amount).toFixed(2)}</td>
                    <td>{expense.category}</td>
                    <td>
                      <button onClick={() => deleteExpense(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeSection === 'receipt-history' && (
          <section id="receipt-history">
            <h2>Your Receipt History</h2>
            <div className="receipt-grid">
              {receipts.map((receipt, index) => (
                <div key={index} className="receipt-item">
                  <img src={receipt} alt={`Receipt ${index + 1}`} className="receipt-image" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <footer style={getContentStyle()}>
        <p>Designed and Created by Emily, Annie, Seungha, and Ivy.</p>
      </footer>
    </div>
  );
};

export default UserPage;