import { AuthModule } from "./auth.module";
import { Module } from "@nestjs/common";
import { AppController } from "./../Controllers/app.controller";
import { AppService } from "../Services/app.service";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "src/Services/prisma.service";
import { PrismaModule } from "./prisma.module";

@Module({
    imports: [AuthModule, PrismaModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
