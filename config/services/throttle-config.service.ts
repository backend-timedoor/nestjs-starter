import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ThrottlerModuleOptions } from "@nestjs/throttler";
import { ThrottlerStorageRedisService } from 'nestjs-throttler-storage-redis';

@Injectable()
export class ThrottleConfigService {
    constructor(private configService: ConfigService) {}

    get throttleConfig(): ThrottlerModuleOptions {
        return {
            ttl: 60,
            limit: 60,
            storage: new ThrottlerStorageRedisService()
        }
    }
}