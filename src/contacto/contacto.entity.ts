import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contactos {
  @PrimaryGeneratedColumn()
  idContacto: number;

  @Column({ length: 45 })
  nombre: string;

  @Column({ length: 45 })
  email: string;

  @Column()
  edad: number;
}
