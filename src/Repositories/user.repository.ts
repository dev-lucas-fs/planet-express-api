import { PrismaService } from "src/Services/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository
{
    constructor(private prisma: PrismaService) {}
    
    async findById(id: number) 
    {
        return this.prisma.user.findFirst({
            where: {
                id
            }
        });
    }

}