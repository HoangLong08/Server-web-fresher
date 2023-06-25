import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tags' }) // name table
export class TagEntity extends BaseEntity {
  @Column()
  name: string;
}
