import React, { useEffect, useState } from 'react';
import './user.css'; // Assuming you have a CSS file for styles
import receiptLogo from 'assets/receipt.png'; // Ensure correct import path for assets

const UserPage = () => {
    const [expenses, setExpenses] = useState([]);
    const [showSection, setShowSection] = useState('main');
    const [selectedFile, setSelectedFile] = useState(null);
    
    useEffect(() => {
        loadExpenses();
    }, []);

    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.querySelector(".openbtn").style.display = "none";
        document.querySelector(".closebtn").style.display = "block";
    };

    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.querySelector(".openbtn").style.display = "block";
        document.querySelector(".closebtn").style.display = "none"; 
    };

    const toggleSection = (sectionId) => {
        setShowSection(sectionId);
        closeNav();
        
        if (sectionId === 'expense-history') {
        loadExpenses();
        }
    };

    const loadExpenses = () => {
        const loadedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(loadedExpenses);
    };

    const saveExpense = (expense) => {
        const updatedExpenses = [...expenses, expense];
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        setExpenses(updatedExpenses);
    };

    const handleExpenseSubmit = (e) => {
        e.preventDefault();
        const date = e.target['expense-date'].value;
        const amount = e.target['expense-amount'].value;
        const category = e.target['expense-category'].value;

        const expense = { date, amount, category };
        saveExpense(expense);
        e.target.reset();
    };

    const handleReceiptSubmit = (e) => {
        e.preventDefault();
        if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            alert('Receipt uploaded successfully!');
            setSelectedFile(null);
        };
        reader.readAsDataURL(selectedFile);
        } else {
        alert('Please select a receipt to upload.');
        }
    };

    const deleteExpense = (index) => {
        const updatedExpenses = expenses.filter((_, i) => i !== index);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        setExpenses(updatedExpenses);
    };

    return (
        <div>
        <header>
            <br />
            <button className="openbtn" onClick={openNav}>&#9776;</button>
            <button className="closebtn" onClick={closeNav}>&#10006;</button>
            <div className="topbtn">
            <button type="button" className="column1"><a href="index.html" style={{ color: '#000000' }}>Log Out</a></button>
            </div>
            <br />
        </header>

        <div className="sidebar" id="mySidebar">
            <div className="logoname column1">
            <img className="logo" src={receiptLogo} alt="Expense Snap Logo" />
            <h3>Expense Snap</h3>
            </div>
            <h2>EasiPeasi</h2>
            <button onClick={() => toggleSection('main')}>Analytics</button>
            <button onClick={() => toggleSection('add-expense')}>Add Expense</button>
            <button onClick={() => toggleSection('expense-history')}>Expense History</button>
            <button onClick={() => toggleSection('receipt-history')}>Receipt History</button>
        </div>

        <div id="main" style={{ display: showSection === 'main' ? 'block' : 'none' }}>
            <h2>Analytics Overview</h2>
            <p>Here is a summary of your spending through the past week, month, and year.</p>
        </div>

        <div className="main-content">
            <section id="add-expense" style={{ display: showSection === 'add-expense' ? 'block' : 'none' }}>
            <h2>Add a New Expense</h2>
            <form onSubmit={handleExpenseSubmit}>
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
            <form onSubmit={handleReceiptSubmit}>
                <label htmlFor="receipt-upload">Upload Receipt:</label>
                <input
                type="file"
                id="receipt-upload"
                name="receipt-upload"
                accept="image/*"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                required
                style={{ display: 'none' }}
                />
                <button type="button" id="custom-file-upload">Choose File</button>
                <span>{selectedFile ? selectedFile.name : 'No file chosen'}</span>
                <button type="submit">Submit</button>
            </form>
            </section>

            <section id="expense-history" style={{ display: showSection === 'expense-history' ? 'block' : 'none' }}>
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
                    <td><button onClick={() => deleteExpense(index)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            </section>

            <section id="receipt-history" style={{ display: showSection === 'receipt-history' ? 'block' : 'none' }}>
            <h2>Your Receipt History</h2>
            {/* Content for receipt history can go here */}
            </section>
        </div>

        <footer>
            <p>Designed and Created by Emily, Annie, Seungha, and Ivy.</p>
        </footer>
        </div>
    );
    };

    export default UserPage;
