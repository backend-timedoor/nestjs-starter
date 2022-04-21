import { Module } from "@nestjs/common";
import { DatabaseConfigService } from "./services/database-config.service";

const providers = [
    DatabaseConfigService
]

@Module({
    providers,
    exports: [
        ...providers
    ]
})
export class AppConfigModule {}