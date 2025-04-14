import { prisma } from "../database/prismaClient";

export class TestimonialRepository {

    async create (testimonialData: testimonialData) {
        return await prisma.testimonial.create({
            data : {
                testimonialData.testimonial,
                author: {
                    create: {
                        name,
                    }
                }
            },
            
        })

    }
}