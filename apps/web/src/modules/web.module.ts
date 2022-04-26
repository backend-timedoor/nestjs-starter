import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebDataInterceptor } from 'common/interceptors/web-data.interceptor';
import { AppConfigModule } from 'config/app-config.module';
import { DatabaseConfigService } from 'config/services/database-config.service';
import { HomeModule } from './home/home.module';

const modules = [
    HomeModule
];

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
        ...modules
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: WebDataInterceptor
        }
    ]
})
export class WebModule { }
