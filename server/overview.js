import axios from "axios";

import dotenv from "dotenv"


dotenv.config();
const baseURL= "https://www.alphavantage.co/query"


const apikey = process.env.API_KEY


export async function fetchData(symbol) {
    try {
        const response = await axios.get(baseURL, {
            params: {
                function: "OVERVIEW",
                symbol: symbol,
                apikey: apikey
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function incomeStat(symbol) {
    try {
        const response = await axios.get(baseURL, {
            params: {
                function: "INCOME_STATEMENT",
                symbol: symbol,
                apikey: apikey
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching income statement:', error);
        throw error;
    }
}

export async function balanceSheet(symbol) {
    try {
        const response = await axios.get(baseURL, {
            params: {
                function: "BALANCE_SHEET",
                symbol: symbol,
                apikey: apikey
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching balance sheet:', error);
        throw error;
    }
}

export async function cashflowStat(symbol) {
    try {
        const response = await axios.get(baseURL, {
            params: {
                function: "CASH_FLOW",
                symbol: symbol,
                apikey: apikey
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cash flow:', error);
        throw error;
    }
}

export async function searchTicker(keywords) {
    try {
        const response = await axios.get(baseURL, {
            params: {
                function: "SYMBOL_SEARCH",
                keywords: keywords,
                apikey: apikey
            }
        });
        return response.data.bestMatches;
    } catch (error) {
        console.error('Error searching ticker:', error);
        throw error;
    }
}