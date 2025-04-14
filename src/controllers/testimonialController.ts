
import { Response, Request } from "express";

export class TestimonialController{

    async create (request: Request, response:Response) {

        const { testimonial, author } = request.body

    }
}