import express from "express";
import routes from "./routes/index.js";

const app = express();

const hostname = "127.0.0.1"; 
const port = 3000; 


// The middleware "express.json()" will read anything inside the API request body as a JSON.
// The result will be passed to any routes we created. 
app.use(express.json()); 

app.use("/", routes); 

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 
