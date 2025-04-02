import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();


const MONGO_URI = process.env.MONGO_URI;


// Function to create connection with error handling
const createConnection = (dbName) => {
    return mongoose.createConnection(MONGO_URI, { dbName })
        .on("error", (err) => console.error(`MongoDB Error in ${dbName}:   `, err))
        .on("open", () => console.log(`Connected to ${dbName} database`));
};

const UserDetails = createConnection("UserDetails");
const Customer = createConnection("Customer");
const Dealer = createConnection("Dealer");
const Helper  = createConnection("Helper");

export { UserDetails, Customer, Dealer, Helper };