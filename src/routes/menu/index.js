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
router.get("/:id", (req, res, next) => {
    try {
        const id = req.params.id;
        if(id < 0 || id >= menus.length) {
            const err = new Error("Invalid ID");
            err.status = 404; 
            throw err; 
        }
        res.json({
            data: menus[id],
        }); 
    } catch (err) {
        next(err);
    }
})

export default router; 
