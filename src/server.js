import express from "express";

const app = express();

const hostname = "127.0.0.1"; 
const port = 3000; 


// The middleware "express.json()" will read anything inside the API request body as a JSON.
// The result will be passed to any routes we created. 
app.use(express.json()); 

const menus = [
    { name: 'Vanilla', description: 'A plain vanilla ice cream' },
    { name: 'Choco Chips', description: 'A chocolate chips ice cream' },
    { name: 'Strawberry', description: 'A strawberry ice cream' },
    { name: 'Mango', description: 'A mango ice cream' },
    { name: 'Pistachio', description: 'A pistachio ice cream' },
];

app.get("/goodbye", (req, res) => {
    res.send("Goodbye Ozan!");
}); 
app.get("/menu", (req, res, next) => {
    res.json({
        data: menus, 
    }); 
}); 
app.post("/menu", (req, res, next) => {
    menus.push(req.body); 
    res.json({
        message: "Success!", 
    }); 
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 
