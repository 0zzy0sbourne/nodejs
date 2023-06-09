import { Router } from "express";   

const router = Router();

const menus = [
    { name: 'Vanilla', description: 'A plain vanilla ice cream' },
    { name: 'Choco Chips', description: 'A chocolate chips ice cream' },
    { name: 'Strawberry', description: 'A strawberry ice cream' },
    { name: 'Mango', description: 'A mango ice cream' },
    { name: 'Pistachio', description: 'A pistachio ice cream' },
];

router.get("/", (req, res, next) => {
    res.json({
        data: menus, 
    })
})

router.post("/", (req, res, next) => {
    menus.push(req.body); 
    res.json({
        message: "Success!"
    }); 
}); 

export default router; 
