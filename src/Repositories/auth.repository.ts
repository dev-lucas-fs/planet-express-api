import { PrismaService } from "src/Services/prisma.service";
import { AuthSignInDTO } from "src/DTO/Auth/authSignIn.dto";
import { Injectable } from "@nestjs/common";
import { AuthSignUpDTO } from "src/DTO/auth.dto";

@Injectable()
export class AuthRepository
{
    constructor(private prisma: PrismaService) {}


    findUserByCredentials(user: AuthSignInDTO)
    { 
        return this.prisma.user.findFirst({
            where: {
                email: user.email
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

    createUser(user: AuthSignUpDTO) 
    {
        return this.prisma.user.create({
            data: user
        })
    }
}