import { prisma } from "../database/prismaClient";

export class TestimonialRepository {

    async createTestimonial (testimonial) {
        return await prisma.testimonial.create({
            
        })

    }
}