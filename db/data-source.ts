import { FeedSeeder } from 'src/modules/feeds/feed.seeder';
import { UserSeeder } from 'src/modules/users/users.seeder';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const dataSourceOption: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123123',
  database: 'webblog',
  entities: ['dist/**/*.entity.js'], // execute entities to db
  migrations: ['dist/db/migrations/*.js'],
  seeds: [FeedSeeder, UserSeeder],
  synchronize: false, // không được set này là true phải dùng migration và seed
  logging: true,
  // seeds: ['dist/**/*.seeder.js'],
  // seeds: [__dirname + '/../**/*.seeder{.ts,.js}'],
  // factories: ['dist/**/*.factory{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOption);
export default dataSource;
