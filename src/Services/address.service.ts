import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateAddressDTO } from "src/DTO/address.dto";
import { AddressRepository } from "src/Repositories/address.repository";

@Injectable()
export class AddressService 
{
    async createAddress(address: CreateAddressDTO) 
    {
        const findAddressResponse = await this.addressRepository.findByName({ name: address.name, userId: address.userId });

        if(findAddressResponse)
            throw new HttpException("Conflict", HttpStatus.CONFLICT);
        
        return this.addressRepository.createAddress(address);
    }
    constructor(private addressRepository: AddressRepository) {}

    async getUserAddress(id: number)
    {
        const address = await this.addressRepository.findByUserId(id);

        return address;
    }

}
