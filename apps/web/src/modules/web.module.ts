import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    ]
})
export class WebModule { }
