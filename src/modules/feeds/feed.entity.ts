import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'feeds' }) // name table
export class FeedEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  readTime: number;

  @Column()
  permalink: string;

  @Column()
  numberUpvote: number;

  @Column()
  numberComment: number;

  // @Column()
  // tags: lis
}
