import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from 'config/app-config.module';
import { DatabaseConfigService } from 'config/services/database-config.service';
import { ThrottleConfigService } from 'config/services/throttle-config.service';
import { HomeModule } from './home/home.module';

const modules = [
    HomeModule
]

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env']
        }),
        TypeOrmModule.forRootAsync({
            imports: [AppConfigModule],
            inject: [DatabaseConfigService],
            useFactory: (configService: DatabaseConfigService) => configService.mysqlConfig
        }),
        ThrottlerModule.forRootAsync({
            imports: [AppConfigModule],
            inject: [ThrottleConfigService],
            useFactory: (configService: ThrottleConfigService) => configService.throttleConfig
        }),
        ...modules
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard
        }
    ]
})
export class ApiModule { }
