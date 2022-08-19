import { Router } from 'express';

// import routes
import booksRoutes from './books.routes';

const router = Router();

router.use('/books', booksRoutes);

export default router
