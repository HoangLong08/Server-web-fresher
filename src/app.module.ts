import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './modules/feeds/feed.module';
import { UsersModule } from './modules/users/users.module';
import { TagsModule } from './modules/tags/tags.module';
import { dataSourceOption } from 'db/data-source';
import { ActivitiesModule } from './modules/activities/activities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOption),
    FeedModule,
    UsersModule,
    TagsModule,
    ActivitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
