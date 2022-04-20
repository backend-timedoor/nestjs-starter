import { Injectable } from "@nestjs/common";

@Injectable()
export class HomeService {
    index(): object {
        return {
            message: "Hello World!!"
        }
    }
}