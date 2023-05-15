import { Injectable, CanActivate, ExecutionContext} from "@nestjs/common";
import { AuthService } from "src/Services/auth.service";
import { UserService } from "src/Services/user.service";

@Injectable()
export class AuthGuard implements CanActivate 
{
    constructor(private readonly authService: AuthService, private readonly userService: UserService) {}  
  
    async canActivate(context: ExecutionContext)
    {
        const request = context.switchToHttp().getRequest();
        const { authorization } = request.headers;
        console.log(authorization)
        try 
        {
            const authorizationSplited = String(authorization).split(" ");

            if(authorizationSplited.length !== 2)
                return false;
        
            const token = authorizationSplited[1];
        
            const data = this.authService.verifyToken(token);
            if(data === undefined)
                return false;
        
            const user = await this.userService.findById(parseInt(data.sub));

            if(!user)
                return false;
          
            request.user = user;
        }
        catch (error) 
        {
            console.log(error);
            return false;
        }
  
        return true;
    }
}
