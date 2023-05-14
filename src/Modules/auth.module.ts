import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthController } from "src/Controllers/auth.controller";
import { AuthRepository } from "src/Repositories/auth.repository";
import { PrismaService } from "src/Services/prisma.service";
import { AuthService } from "src/Services/auth.service";
import { PrismaModule } from "./prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [AuthController],
    providers: [AuthService, JwtService, AuthRepository, PrismaService]
})
export class AuthModule {}
