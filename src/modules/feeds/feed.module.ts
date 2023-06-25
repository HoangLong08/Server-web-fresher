import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedEntity } from './feed.entity';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FeedEntity])],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
