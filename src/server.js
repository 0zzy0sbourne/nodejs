import express from "express";
import routes from "./routes/index.js";
import morgan from "morgan";
import logger from "./lib/logger.js";

const app = express();

const hostname = "127.0.0.1"; 
const port = 3000; 

// MIDDLEWARES 

// The middleware "express.json()" will read anything inside the API request body as a JSON.
// The result will be passed to any routes we created. 
app.use(express.json()); 

// Logger middleware 
const httpReqLogFormat = 
    ':method :url :status :res[content-length] - :response-time ms';
const httpReqLogger = morgan(httpReqLogFormat, {stream: logger.stream}); 

app.use(httpReqLogger);

app.use("/", routes); 

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 
