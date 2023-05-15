import { OrderModule } from "./order.module";
import { UserModule } from "./user.module";
import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma.module";
import { AuthModule } from "./auth.module";
import { AddressModule } from "./address.module";
import { AuthService } from "src/Services/auth.service";
import { UserService } from "src/Services/user.service";
import { JwtService } from "@nestjs/jwt";
import { AuthRepository } from "src/Repositories/auth.repository";
import { UserRepository } from "src/Repositories/user.repository";



@Module({
    imports: [
        OrderModule, UserModule, PrismaModule, AuthModule, AddressModule],
    controllers: [],
    providers: [
        AuthService,
        UserService,
        JwtService,
        AuthRepository,
        UserRepository
    ],
})
export class AppModule { }
