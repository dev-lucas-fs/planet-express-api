import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "src/Services/auth.service";
import { AuthSignInDTO } from "src/DTO/Auth/authSignIn.dto";
import { AuthSignUpDTO } from "src/DTO/auth.dto";

@Controller("auth")
export class AuthController 
{
    constructor(private readonly authService: AuthService) {}

    @Post("signIn")
    async signIn(@Body() body: AuthSignInDTO) 
    {   
        const response = this.authService.signIn(body)

        return response
    }

    @Post("signUp")
    async signUp(@Body() body: AuthSignUpDTO) 
    {   
        console.log(body)
        try 
        {
            const response = this.authService.signUp(body)
            return response
        }
        catch(err) 
        {
            return err
        }
    }
}
