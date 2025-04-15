import { Router, Request, Response } from 'express';
import { TestimonialController } from './controllers/testimonialController';

const routes = Router();
const testimonialController = new TestimonialController();

routes.post('/create', (req: Request, res: Response) =>
  testimonialController.create(req, res)
);

export { routes };
