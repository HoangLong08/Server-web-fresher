import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FeedService } from './feed.service';
import { CreateFeedDto } from './feed.dto';

@Controller('feeds')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('')
  getListFeed() {
    return this.feedService.getListFeed();
  }

  @Post()
  // @HttpCode(HttpStatus.OK) // xác định trạng thái trả về
  async createFeed(@Body() feed: CreateFeedDto) {
    return await this.feedService.createNewFeed(feed);
  }

  @Put(':id')
  updateFeedById(@Param('id') id: string, @Body() feedDto: CreateFeedDto) {
    return this.feedService.update(id, feedDto);
  }

  @Delete(':id')
  deleteFeedById(@Param('id') id: string) {
    return this.feedService.deleteFeedById(id);
  }
}
