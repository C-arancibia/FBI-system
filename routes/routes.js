import express from 'express';
const router = express.Router();
import { home, loginAgente, validarAgente } from 'controllers/fbiControllers.js';

router.get('/', home);
router.post('/signin', loginAgente);
router.get('/restricted', validarAgente);

export default router;
