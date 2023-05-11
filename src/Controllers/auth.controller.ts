import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "src/Services/auth.service";
import { AuthRouteEnum } from "./Routers/auth.route";
import { AuthSignInDTO } from "src/DTO/Auth/authSignIn.dto";

@Controller(AuthRouteEnum.base)
export class AuthController 
{
    constructor(private readonly authService: AuthService) {}

    @Post(AuthRouteEnum.signIn)
    async signIn(@Body() body: AuthSignInDTO) 
    {   
        const response = this.authService.signIn(body)

        return response
    }

    @Post(AuthRouteEnum.signUp)
    async signUp(@Body() body: AuthSignInDTO) 
    {   
        const response = this.authService.signUp(body)

        return response
    }
}
