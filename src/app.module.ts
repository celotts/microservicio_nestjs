import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactosController } from './contacto/contactos.controller';
import { ContactosService } from './contacto/contactos.service';
import { Contactos } from './contacto/contacto.entity';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfiguration } from './database.configuration';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => DatabaseConfiguration.getConfig(),
    }),
    TypeOrmModule.forFeature([Contactos]),
  ],
  controllers: [ContactosController],
  providers: [ContactosService],
  exports: [ContactosService],
})
export class AppModule {}
