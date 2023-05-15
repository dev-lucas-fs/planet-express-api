import { Body, Controller, Get, HttpCode, Post, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { CreateAddressDTO } from "src/DTO/address.dto";
import { LoggedUser } from "src/Decorators/loggeduser.decorator";
import { AuthGuard } from "src/Guards/auth.guard";
import { AddressService } from "src/Services/address.service";

@Controller("address")
@UseGuards(AuthGuard)
export class AddressController 
{ 

    constructor(private addressService: AddressService) {}

    @Get()
    async getUserAddress(@LoggedUser() user: User)
    {
        try 
        {
            const address = this.addressService.getUserAddress(user.id);

            return address;
        }
        catch(err) 
        {
            return err
        }
    }

    @Post()
    @HttpCode(201)
    async createUserAddress(@LoggedUser() user: User, @Body() body: CreateAddressDTO)
    {
        const address = {...body, ...{ userId: user.id } };

        try 
        {
            await this.addressService.createAddress(address)
        }
        catch(err) 
        {
            console.log(err)
            return err;
        }

    }

}
