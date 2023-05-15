import { Injectable } from "@nestjs/common";
import { CreateAddressDTO } from "src/DTO/address.dto";
import { PrismaService } from "src/Services/prisma.service";

@Injectable()
export class AddressRepository 
{
    createAddress(address: CreateAddressDTO) 
    { 
        console.log(address.userId, "sssssssssssssss")
        return this.prisma.address.create({
            data: {
                name: address.name,
                "cep": address.cep,
                "street": address.street,
                "city": address.city,
                "state": address.state,
                "number": address.number,
                "neighborhood": address.neighborhood,
                "addressDetail": address.addressDetail,
                userId: address.userId
            }
        })
    }
    findByName({ name, userId }: { name: string; userId: number; }) 
    {
        return this.prisma.address.findFirst({
            where: {
                userId,
                name
            }
        })
    }
    constructor(private prisma: PrismaService) {}

    findByUserId(id: number)
    {
        return this.prisma.address.findMany({
            where: {
                userId: id
            },
            take: 5,
            select: {
                cep: true,
                street: true,
                city: true,
                state: true,
                number: true,
                neighborhood: true,
                addressDetail: true
            }
        })
    }

}