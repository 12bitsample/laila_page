import express from 'express';
import cors from 'cors';
import {test, registerUser} from '../controllers/authController.js';

const router = express.Router();

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
);

router.get('/', test);
router.post('/register', registerUser);


export {router as default};