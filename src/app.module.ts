/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { Article } from './article/entities/article.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'JVServer2022',
            entities: [Article],
            database: 'Deporte77Blog',
            synchronize: true,
            logging: true
        }),
        ArticleModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
