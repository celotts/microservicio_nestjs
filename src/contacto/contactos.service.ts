import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contactos } from './contacto.entity';

@Injectable()
export class ContactosService {
  constructor(
    @InjectRepository(Contactos)
    private readonly contactoRepository: Repository<Contactos>,
  ) {}

  async getAllContactos(): Promise<Contactos[]> {
    return this.contactoRepository.find();
  }

  async getContactoById(id: number): Promise<Contactos> {
    return this.contactoRepository.findOne({ where: { idContacto: id } });
  }

  async createContacto(contacto: Contactos): Promise<Contactos> {
    return this.contactoRepository.save(contacto);
  }

  async updateContacto(id: number, contactos: Contactos): Promise<Contactos> {
    const existingContacto = await this.contactoRepository.findOne({
      where: { idContacto: id },
    });
    if (!existingContacto) {
      throw new NotFoundException('Contacto no encontrado');
    }
    await this.contactoRepository.update(id, contactos);
    return this.contactoRepository.findOne({ where: { idContacto: id } });
  }

  async deleteContacto(id: number): Promise<boolean> {
    const result = await this.contactoRepository.delete(id);
    return result.affected > 0;
  }
}
