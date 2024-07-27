import React, { useState } from 'react';
import axios from 'axios';
import DashboardTabs from './components/dashTabs';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [incomeStatement, setIncomeStatement] = useState(null);
  const [overview, setOverview] = useState(null);
  const [balanceSheet, setBalanceSheet] = useState(null);
  const [cashflow, setCashflow] = useState(null);

  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      try {
        const response = await axios.get('http://localhost:5000/search', { params: { keywords: query } });
        console.log('Search response:', response.data); // Log the response data
        setSearchResults(response.data|| []);
        console.log('Updated search results:', response.data || []); // Log updated search results
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]); // reset to empty array on error
      }
    } else {
      setSearchResults([]);
    }
  };

  const fetchData = async (symbol) => {
    setLoading(true);
    try {
      const [overviewResponse, incomeResponse, balanceResponse, cashflowResponse] = await Promise.all([
        axios.get('http://localhost:5000/overview', { params: { symbol } }),
        axios.get('http://localhost:5000/income', { params: { symbol } }),
        axios.get('http://localhost:5000/balance', { params: { symbol } }),
        axios.get('http://localhost:5000/cashflow', { params: { symbol } })
      ]);

      setOverview(overviewResponse.data);
      setIncomeStatement(incomeResponse.data);
      setBalanceSheet(balanceResponse.data);
      setCashflow(cashflowResponse.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching company data:', error);
      setLoading(false);
    }
  };

  const handleResultClick = (symbol) => {
    setSelectedSymbol(symbol);
    fetchData(symbol);
  };

  return (
    <div className="App">
      <h1>Finance Dashboard</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for a company..."
      />
      <ul>
        {Array.isArray(searchResults) && searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <li
              key={index}
              onClick={() => handleResultClick(result['1. symbol'])}
              className="clickable"
            >
              {result['1. symbol']} - {result['2. name']}
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>

      {loading && <div>Loading...</div>}

      {!loading && selectedSymbol && (
        <DashboardTabs
          data={{
            overview: overview,
            income: incomeStatement,
            balance: balanceSheet,
            cashflow: cashflow,
          }}
        />
      )}
    </div>
  );
};

export default App;
