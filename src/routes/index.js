import {Router} from 'express';
import menuRoutes from "./menu/index.js"; 

const router = Router(); 
router.use('/menu', menuRoutes); 

export default router; 
