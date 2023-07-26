import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Repository } from 'typeorm';
import { Permission } from './entities/permission.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionsRepository: Repository<Permission>,
  ) {}

  async findAll(): Promise<Permission[]> {
    return this.permissionsRepository.find();
  }

  async findOne(id: number): Promise<Permission> {
    return this.permissionsRepository.findOne(id);
  }

  async create(dto: CreatePermissionDto): Promise<Permission> {
    return this.permissionsRepository.save(dto);
  }

  async update(id: number, dto: UpdatePermissionDto): Promise<Permission> {
    await this.permissionsRepository.update(id, dto);

    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    await this.permissionsRepository.delete(id);

    return true;
  }
}
