import mongoose from "mongoose";
import { DB_CONFIG } from "../utilities/secret";

const dbURI = `mongodb://${DB_CONFIG.USER}:${encodeURIComponent(
    DB_CONFIG.PASSWORD
)}@${DB_CONFIG.HOST}:${DB_CONFIG.PORT}/${DB_CONFIG.DATABASE}`;

const options = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    autoIndex: true,
    // poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    // bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

console.log(dbURI);

// Create the database connection
mongoose
    .connect(dbURI, options)
    .then(() => {
      console.log("Mongooes connection created");
    })
    .catch((e) => {
      console.log(e);
      
    });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
  console.log("Connected");
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        process.exit(0);
    });
});
