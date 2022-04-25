import { Module } from "@nestjs/common";
import { DatabaseConfigService } from "./services/database-config.service";
import { ThrottleConfigService } from "./services/throttle-config.service";

const providers = [
    DatabaseConfigService,
    ThrottleConfigService
]

@Module({
    providers,
    exports: [
        ...providers
    ]
})
export class AppConfigModule {}