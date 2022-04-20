import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';

const modules = [
  HomeModule
];

@Module({
  imports: [
    ...modules
  ]
})
export class WebModule {}
