import { BaseEntity } from 'src/common/base.entity';
import { UserEntity } from 'src/modules/users/users.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'activities' }) // name table
export class ActivityEntity extends BaseEntity {
  @Column('text')
  content: string;

  @Column('text')
  contentHtml: string;

  @Column({ default: false })
  upvoted: boolean;

  @ManyToOne(() => UserEntity, (user) => user.activities)
  user: UserEntity;
}
