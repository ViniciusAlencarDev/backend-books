import { Router } from 'express';
import BookController from '../app/Controllers/BookController';

const router = Router();

router.get('/', BookController.getBook)

export default router
