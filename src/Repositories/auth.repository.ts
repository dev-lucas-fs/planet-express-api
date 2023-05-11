import { PrismaService } from "src/Services/prisma.service";
import { AuthSignInDTO } from "src/DTO/Auth/authSignIn.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRepository
{
    constructor(private prisma: PrismaService) {}


    findUserByCredentials(user: AuthSignInDTO)
    { 
        return this.prisma.user.findFirst({
            where: {
                email: user.email,
                password: user.password
            }
        })
    }

    findUserByEmail(email: string)
    {
        return this.prisma.user.findFirst({
            where: {
                email
            }
        })
    }

    createUser(user: AuthSignInDTO) 
    {
        return this.prisma.user.create({
            data: user
        })
    }
}