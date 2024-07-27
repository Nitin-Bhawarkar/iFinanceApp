import mongoose from 'mongoose'

const URI = process.env.MONGO_URI

export async function connectToMongoDB() {
  try {
   const conn = await mongoose.connect(URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
      // Other options if needed
    });
    console.log('Connected to MongoDB ' , conn.connection.host);
    console.log('Connected PORT to MongoDB ' , conn.connection.port);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the function to connect

