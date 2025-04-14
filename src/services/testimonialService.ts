import { prisma } from '../database/prismaClient'
import { TestimonialRepository } from '../repositories/testimonialRepository'

const testimonialRepository = new TestimonialRepository();


export class TestimonialService{

    async create(testimonial: string) {
        
        return await testimonialRepository.create(testimonial)
        
    }
}