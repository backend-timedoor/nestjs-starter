import { Module } from "@nestjs/common";
import { HomeController } from "./home.controller";
import { HomeService } from "./home.service";

@Module({
    providers: [HomeService],
    controllers: [HomeController]
})
export class HomeModule {}