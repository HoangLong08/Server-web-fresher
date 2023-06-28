import { BaseEntity } from 'src/common/base.entity';
import { UserRoleType } from 'src/types';
import { Column, Entity, OneToMany } from 'typeorm';
import { ActivityEntity } from '../activities/entities/activity.entity';

@Entity({ name: 'users' }) // name table
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'user'],
    default: 'user',
  })
  role: UserRoleType;

  @Column({
    default: '123',
  })
  password: string;

  @OneToMany(() => ActivityEntity, (activity) => activity.user)
  activities: ActivityEntity[];
}
