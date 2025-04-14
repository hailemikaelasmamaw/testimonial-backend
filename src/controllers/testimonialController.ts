
import { Response, Request } from "express";
import { TestimonialService } from "../services/testimonialService";


const testimonialService = new TestimonialService();
export class TestimonialController{

    async create (request: Request, response:Response) {

        const { testimonial, author } = request.body
        const testimonialCreated = await TestimonialService.create({ 
            testimonial, 
            name: author,
        })

        return response.status(200).json(testimonialCreated)

    }
}