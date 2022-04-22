import { Controller, Get, Render } from "@nestjs/common";
import { Csrf } from "common/decorators/csrf.decorator";
import { HomeService } from "./home.service";

@Controller()
export class HomeController {
    constructor(private service: HomeService) {}
    
    @Get()
    @Csrf()
    @Render('Home')
    index(): {} {
        return this.service.index();
    }
}