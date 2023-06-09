import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { Contactos } from './contacto.entity';
import { ContactosService } from './contactos.service';

@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Get()
  async getAllContactos(): Promise<Contactos[]> {
    return this.contactosService.getAllContactos();
  }

  @Get(':id')
  async getContactoById(@Param('id') id: number): Promise<Contactos> {
    const contacto = await this.contactosService.getContactoById(id);
    if (!contacto) {
      throw new NotFoundException('Contacto no encontrado');
    }
    console.log('contacto creado ', contacto);
    return contacto;
  }

  @Post()
  async createContacto(@Body() contacto: Contactos): Promise<Contactos> {
    const createContacto = await this.contactosService.createContacto(contacto);
    console.log(createContacto);
    return createContacto;
  }

  @Put(':id')
  async updateContacto(
    @Param('id') id: number,
    @Body() contacto: Contactos,
  ): Promise<Contactos> {
    const updatedContacto = await this.contactosService.updateContacto(
      id,
      contacto,
    );
    if (!updatedContacto) {
      throw new NotFoundException('Contacto no encontrado');
    }
    return updatedContacto;
  }

  @Delete(':id')
  async deleteContacto(@Param('id') id: number): Promise<void> {
    const result = await this.contactosService.deleteContacto(id);
    if (!result) {
      throw new NotFoundException('Contacto no encontrado');
    }
  }
}
