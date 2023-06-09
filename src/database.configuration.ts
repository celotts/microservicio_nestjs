import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Contactos } from './contacto/contacto.entity';

export class DatabaseConfiguration {
  public static getConfig(): TypeOrmModuleOptions {
    return {
      type: process.env.TYPE === 'mariadb' ? 'mariadb' : 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Contactos],
      synchronize: true,
    };
  }
}
