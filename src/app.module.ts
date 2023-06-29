import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './modules/feeds/feed.module';
import { UsersModule } from './modules/users/users.module';
import { TagsModule } from './modules/tags/tags.module';
import { dataSourceOption } from 'db/data-source';
import { ActivitiesModule } from './modules/activities/activities.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerMiddleware } from './utils/logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOption),
    FeedModule,
    UsersModule,
    TagsModule,
    ActivitiesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/'); //('*')
  }
}
