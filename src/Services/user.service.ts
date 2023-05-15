/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/Repositories/user.repository";

@Injectable()
export class UserService 
{
    constructor(private userRepository: UserRepository) {}

    async findById(id: number)
    {
        const user = await this.userRepository.findById(id);
        
        return user === null ? {} : user;
    }

}
