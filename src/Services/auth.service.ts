import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthSignInDTO } from "src/DTO/Auth/authSignIn.dto";
import { AuthRepository } from "src/Repositories/auth.repository";

@Injectable()
export class AuthService 
{
    constructor(private jwtService: JwtService, private readonly authRepository: AuthRepository) {}
    
    async signIn(user: AuthSignInDTO) 
    {
        const response = await this.authRepository.findUserByCredentials(user)
        
        if(!response)
            throw new HttpException("Forbidden", HttpStatus.FORBIDDEN)
                
        const token = this.createToken(user)

        return {
            accessToken: token
        }
    }

    async signUp(user: AuthSignInDTO) 
    {
        const isUser = await this.authRepository.findUserByEmail(user.email)
        console.log(isUser)
        if(isUser) 
            throw new HttpException("Conflict", HttpStatus.CONFLICT)

        return await this.authRepository.createUser(user)   
    }

    createToken(payload: object | string | Buffer)
    {
        const options = {
            expiresIn: "7 days",
            subject: String(1),
            issuer: "Planet Express API",
            audience: "users",
            secret: process.env.JWT_SECRET
        }
        return this.jwtService.sign(payload, options)
    }

    verifyToken(token: string)
    {
        const secret = process.env.JWT_SECRET as string
        const tokenVerified = this.jwtService.verify(token, { secret })
        
        return tokenVerified
    }   
}
