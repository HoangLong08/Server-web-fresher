import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { FeedEntity } from './feed.entity';

export class FeedSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const feedRepository = dataSource.getRepository(FeedEntity);

    // const feedData = {
    //   title: 'string',
    //   image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ee2797651d360a40b080e65c6f855bca?_a=AQADKdt',
    //   readTime: 1,
    //   permalink: 'string',
    //   numberUpvote: 2,
    //   numberComment: 3,
    // };

    // const newFeed = feedRepository.create(feedData);
    // await feedRepository.save(newFeed);
    await feedRepository.insert([
      {
        title: 'string 1',
        image:
          'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ee2797651d360a40b080e65c6f855bca?_a=AQADKdt',
        readTime: 1,
        permalink: 'string 1',
        numberUpvote: 1,
        numberComment: 1,
      },
      {
        title: 'string 2',
        image:
          'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ee2797651d360a40b080e65c6f855bca?_a=AQADKdt',
        readTime: 2,
        permalink: 'string 2',
        numberUpvote: 2,
        numberComment: 2,
      },
      {
        title: 'string 3',
        image:
          'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ee2797651d360a40b080e65c6f855bca?_a=AQADKdt',
        readTime: 3,
        permalink: 'string 3',
        numberUpvote: 3,
        numberComment: 3,
      },
      {
        title: 'string 4',
        image:
          'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ee2797651d360a40b080e65c6f855bca?_a=AQADKdt',
        readTime: 4,
        permalink: 'string 4',
        numberUpvote: 4,
        numberComment: 4,
      },
      {
        title: 'string 5',
        image:
          'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ee2797651d360a40b080e65c6f855bca?_a=AQADKdt',
        readTime: 5,
        permalink: 'string 5',
        numberUpvote: 5,
        numberComment: 5,
      },
      {
        title: 'string 6',
        image:
          'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ee2797651d360a40b080e65c6f855bca?_a=AQADKdt',
        readTime: 6,
        permalink: 'string 6',
        numberUpvote: 6,
        numberComment: 6,
      },
      {
        title: 'string 7',
        image:
          'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ee2797651d360a40b080e65c6f855bca?_a=AQADKdt',
        readTime: 7,
        permalink: 'string 7',
        numberUpvote: 7,
        numberComment: 7,
      },
      {
        title: 'string 8',
        image:
          'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ee2797651d360a40b080e65c6f855bca?_a=AQADKdt',
        readTime: 8,
        permalink: 'string 8',
        numberUpvote: 8,
        numberComment: 8,
      },
    ]);
  }
}
