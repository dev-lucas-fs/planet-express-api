import { AddressService } from "./../Services/address.service";
import { Module } from "@nestjs/common";
import { AddressController } from "src/Controllers/address.controller";
import { AddressRepository } from "src/Repositories/address.repository";
import { PrismaModule } from "./prisma.module";
import { AuthService } from "src/Services/auth.service";
import { JwtService } from "@nestjs/jwt";
import { AuthRepository } from "src/Repositories/auth.repository";
import { UserService } from "src/Services/user.service";
import { UserRepository } from "src/Repositories/user.repository";

@Module({
    imports: [PrismaModule],
    controllers: [AddressController],
    providers: [AddressService, AddressRepository, AuthService, JwtService, AuthRepository, UserService, UserRepository],
})
export class AddressModule { }
