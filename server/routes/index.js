
// Express Router
import express from 'express';
import { balanceSheet, cashflowStat, fetchData, incomeStat, searchTicker } from '../overview.js';

const router = express.Router();

router.get('/overview', async (req, res) => {
    try {
        const { symbol } = req.query;
        if (!symbol) {
            return res.status(400).json({ error: 'Symbol query parameter is required' });
        }
        const overview = await fetchData(symbol);
        res.json(overview);
    } catch (error) {
        console.error('Error in /overview:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/balance', async (req, res) => {
    try {
        const { symbol } = req.query;
        if (!symbol) {
            return res.status(400).json({ error: 'Symbol query parameter is required' });
        }
        const balance = await balanceSheet(symbol);
        res.json(balance);
    } catch (error) {
        console.error('Error in /balance:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/cashflow', async (req, res) => {
    try {
        const { symbol } = req.query;
        if (!symbol) {
            return res.status(400).json({ error: 'Symbol query parameter is required' });
        }
        const cashflow = await cashflowStat(symbol);
        res.json(cashflow);
    } catch (error) {
        console.error('Error in /cashflow:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/income', async (req, res) => {
    try {
        const { symbol } = req.query;
        if (!symbol) {
            return res.status(400).json({ error: 'Symbol query parameter is required' });
        }
        const income = await incomeStat(symbol);
        res.json(income);
    } catch (error) {
        console.error('Error in /income:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/search', async (req, res) => {
    try {
        const { keywords } = req.query;
        if (!keywords) {
            return res.status(400).json({ error: 'Keywords query parameter is required' });
        }
        const tickerSearch = await searchTicker(keywords);
        res.json(tickerSearch);
    } catch (error) {
        console.error('Error in /search:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;