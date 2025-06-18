import express from 'express';
import { register, login } from '../controllers/AuthController.js';
import validate from '../middleware/validationMiddleware.js';
import { loginSchema, registerSchema } from '../utils/validationSchemas.js';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

export default router;