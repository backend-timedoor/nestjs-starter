import { Controller, Get } from "@nestjs/common";
import { HomeService } from "./home.service";

@Controller()
export class HomeController {
    constructor(private service: HomeService) {}

    @Get()
    index(): object {
        return this.service.index();
    }
}