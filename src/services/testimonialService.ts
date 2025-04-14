import { prisma } from '../database/prismaClient'
import { TestimonialRepository } from '../repositories/testimonialRepository'


export interface TestimonialData {
    testimonial: string,
    name: string
}

const testimonialRepository = new TestimonialRepository();


export class TestimonialService{

    async create(testimonial: string,  name: string) {

        return await testimonialRepository.create(testimonialData)
        
    }
}