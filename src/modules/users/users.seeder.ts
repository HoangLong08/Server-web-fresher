import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { UserEntity } from './users.entity';

export class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userRepository = dataSource.getRepository(UserEntity);
    await userRepository.insert([
      {
        email: 'testing@gmail.com',
        role: 'user',
      },
      {
        email: 'test@gmail.com',
        role: 'user',
      },
      {
        email: 'admin@gmail.com',
        role: 'admin',
      },
      {
        email: 'longnguyen.080400@gmail.com',
        role: 'admin',
      },
    ]);
  }
}
