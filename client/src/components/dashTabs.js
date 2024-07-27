import React from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import '../App.css';
const Overview = ({ overview }) => {
  if (!overview) return <div>Loading...</div>;
  return (
    <div className="overview-container">
      <h2>Overview</h2>
      <div className="overview-details">
        <div className="overview-info">
          <h3>{overview.Name} ({overview.Symbol})</h3>
          <p>{overview.Description}</p>
          <p><strong>Industry:</strong> {overview.Industry}</p>
          <p><strong>Sector:</strong> {overview.Sector}</p>
          <p><strong>Country:</strong> {overview.Country}</p>
          <p><strong>Exchange:</strong> {overview.Exchange}</p>
          <p><strong>Address:</strong> {overview.Address}</p>
        </div>
        <div className="overview-financials">
          <h3>Financial Metrics</h3>
          <p><strong>Market Capitalization:</strong> ${overview.MarketCapitalization}</p>
          <p><strong>Revenue (TTM):</strong> ${overview.RevenueTTM}</p>
          <p><strong>EPS (TTM):</strong> ${overview.EPS}</p>
          <p><strong>Dividend Yield:</strong> {overview.DividendYield}%</p>
          <p><strong>52-Week High:</strong> ${overview['52WeekHigh']}</p>
          <p><strong>52-Week Low:</strong> ${overview['52WeekLow']}</p>
          <p><strong>50-Day Moving Average:</strong> ${overview['50DayMovingAverage']}</p>
          <p><strong>200-Day Moving Average:</strong> ${overview['200DayMovingAverage']}</p>
        </div>
      </div>
    </div>
  );
};

const Income = ({ income }) => {
  if (!income) return <div>Loading...</div>;
  return (
    <div>
      <h2>Income</h2>
      <h3>Annual Reports</h3>
      <div className="income-container">
        <div className="income-table-container">
          <table className="income-table">
            <thead>
              <tr>
                <th>Fiscal Date Ending</th>
                <th>Reported Currency</th>
                <th>Gross Profit</th>
                <th>Total Revenue</th>
                <th>Operating Income</th>
              </tr>
            </thead>
            <tbody>
              {income.annualReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.fiscalDateEnding}</td>
                  <td>{report.reportedCurrency}</td>
                  <td>{report.grossProfit}</td>
                  <td>{report.totalRevenue}</td>
                  <td>{report.operatingIncome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h3>Quarterly Reports</h3>
      <div className="income-container">
        <div className="income-table-container">
          <table className="income-table">
            <thead>
              <tr>
                <th>Fiscal Date Ending</th>
                <th>Reported Currency</th>
                <th>Gross Profit</th>
                <th>Total Revenue</th>
                <th>Operating Income</th>
              </tr>
            </thead>
            <tbody>
              {income.quarterlyReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.fiscalDateEnding}</td>
                  <td>{report.reportedCurrency}</td>
                  <td>{report.grossProfit}</td>
                  <td>{report.totalRevenue}</td>
                  <td>{report.operatingIncome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Balance = ({ balance }) => {
  if (!balance) return <div>Loading...</div>;
  return (
    <div>
      <h2>Balance Sheet</h2>
      <h3>Annual Reports</h3>
      <div className="income-container">
        <div className="income-table-container">
          <table className="income-table">
            <thead>
              <tr>
                <th>Fiscal Date Ending</th>
                <th>Reported Currency</th>
                <th>Total Assets</th>
                <th>Total Liabilities</th>
                <th>Inventory</th>
              </tr>
            </thead>
            <tbody>
              {balance.annualReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.fiscalDateEnding}</td>
                  <td>{report.reportedCurrency}</td>
                  <td>{report.totalAssets}</td>
                  <td>{report.totalLiabilities}</td>
                  <td>{report.inventory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h3>Quarterly Reports</h3>
      <div className="income-container">
        <div className="income-table-container">
          <table className="income-table">
            <thead>
              <tr>
                <th>Fiscal Date Ending</th>
                <th>Reported Currency</th>
                <th>Total Assets</th>
                <th>Total Liabilities</th>
                <th>Inventory</th>
              </tr>
            </thead>
            <tbody>
              {balance.quarterlyReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.fiscalDateEnding}</td>
                  <td>{report.reportedCurrency}</td>
                  <td>{report.totalAssets}</td>
                  <td>{report.totalLiabilities}</td>
                  <td>{report.inventory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Cashflow = ({ cashflow }) => {
  if (!cashflow) return <div>Loading...</div>;
  return (
    <div>
      <h2>Cashflow Statement</h2>
      <h3>Annual Reports</h3>
      <div className="income-container">
        <div className="income-table-container">
          <table className="income-table">
            <thead>
              <tr>
                <th>Fiscal Date Ending</th>
                <th>Reported Currency</th>
                <th>CashFlow Investment Activities</th>
                <th>CashFlow Financing Activities</th>
                <th>Dividend Payout</th>
                <th>Net Income</th>
              </tr>
            </thead>
            <tbody>
              {cashflow.annualReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.fiscalDateEnding}</td>
                  <td>{report.reportedCurrency}</td>
                  <td>{report.cashflowFromInvestment}</td>
                  <td>{report.cashflowFromFinancing}</td>
                  <td>{report.dividendPayout}</td>
                  <td>{report.netIncome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h3>Quarterly Reports</h3>
      <div className="income-container">
        <div className="income-table-container">
          <table className="income-table">
            <thead>
              <tr>
                <th>Fiscal Date Ending</th>
                <th>Reported Currency</th>
                <th>CashFlow Investment Activities</th>
                <th>CashFlow Financing Activities</th>
                <th>Dividend Payout</th>
                <th>Net Income</th>
              </tr>
            </thead>
            <tbody>
              {cashflow.quarterlyReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.fiscalDateEnding}</td>
                  <td>{report.reportedCurrency}</td>
                  <td>{report.cashflowFromInvestment}</td>
                  <td>{report.cashflowFromFinancing}</td>
                  <td>{report.dividendPayout}</td>
                  <td>{report.netIncome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const DashboardTabs = ({ data }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Income</Tab>
        <Tab>Balance</Tab>
        <Tab>Cashflow</Tab>
      </TabList>

      <TabPanel>
        <Overview overview={data.overview} />
      </TabPanel>
      <TabPanel>
        <Income income={data.income} />
      </TabPanel>
      <TabPanel>
        <Balance balance={data.balance} />
      </TabPanel>
      <TabPanel>
        <Cashflow cashflow={data.cashflow} />
      </TabPanel>
    </Tabs>
  );
};

export default DashboardTabs;
