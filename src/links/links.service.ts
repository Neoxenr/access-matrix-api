import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Repository } from 'typeorm';
import { Link } from './entities/link.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link) private readonly linkRepository: Repository<Link>,
  ) {}

  async findAll(): Promise<Link[]> {
    return this.linkRepository.find();
  }

  async findOne(id: number): Promise<Link> {
    return this.linkRepository.findOne(id);
  }

  async createOne(dto: CreateLinkDto): Promise<Link> {
    return this.linkRepository.save(dto);
  }

  async createMany(dto: CreateLinkDto[]): Promise<Link[]> {
    return this.linkRepository.save(dto);
  }

  async update(id: number, dto: UpdateLinkDto): Promise<Link> {
    await this.linkRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    await this.linkRepository.delete(id);

    return true;
  }
}
