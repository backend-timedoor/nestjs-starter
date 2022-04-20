import { Injectable } from "@nestjs/common";

@Injectable()
export class HomeService {
    index(): {} {
        return {
            message: "Hello World"
        }
    }
}