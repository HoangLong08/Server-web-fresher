import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { FeedSeeder } from 'src/modules/feeds/feed.seeder';
import { UserSeeder } from 'src/modules/users/users.seeder';
require('dotenv').config();

export const dataSourceOption: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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
async function testDatabaseConnection() {
  try {
    await dataSource.initialize();
    console.log('---- Data Source has been initialized! ----');
  } catch (error) {
    console.log(
      'process.env: ',
      process.env.DB_HOST,
      process.env.DB_PORT,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      process.env.DB_DATABASE,
    );
    console.error('Error during Data Source initialization', error);
  }
}

testDatabaseConnection();
export default dataSource;
