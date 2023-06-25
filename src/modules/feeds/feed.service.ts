import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './feed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedEntity } from './feed.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedEntity)
    private readonly feedRepository: Repository<FeedEntity>,
  ) {}

  async getListFeed(): Promise<FeedEntity[]> {
    const res = await this.feedRepository.find();
    return res;
  }

  async createNewFeed(feed: CreateFeedDto) {
    return await this.feedRepository.save(feed);
  }

  async update(id: string, feedDto: CreateFeedDto) {
    return await this.feedRepository.update(id, feedDto);
  }

  async deleteFeedById(id: string) {
    return await this.feedRepository.delete(id);
  }
}
