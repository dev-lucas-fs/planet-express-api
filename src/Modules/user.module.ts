
import { Module } from "@nestjs/common";
import { UserRepository } from "src/Repositories/user.repository";
import { UserService } from "src/Services/user.service";
import { PrismaModule } from "./prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [],
    providers: [UserService, UserRepository],
})
export class UserModule { }
