import { Module } from "@nestjs/common";
import { PrismaService } from "../Services/prisma.service";

@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule { }