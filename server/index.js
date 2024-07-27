import express from 'express';
import dotenv from  'dotenv';
import cors from 'cors';
import { connectToMongoDB } from './db/connect.js';
import routes from './routes/index.js';

try {
    dotenv.config();
  } catch (error) {
    console.error('Error loading .env file:', error);
  }
  


const app = express();


app.use(cors()); // Add this line to enable CORS
const PORT = process.env.PORT;

connectToMongoDB();

// Use the routes
app.use('/', routes);
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});




app.listen(PORT, () => {
  console.log(`Server Start on port ${PORT}`);
});

