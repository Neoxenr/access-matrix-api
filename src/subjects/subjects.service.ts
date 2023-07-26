import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectsRepository: Repository<Subject>,
  ) {}

  async findAll(): Promise<Subject[]> {
    return this.subjectsRepository.find();
  }

  async findOne(id: number): Promise<Subject> {
    return this.subjectsRepository.findOne(id);
  }

  async create(dto: CreateSubjectDto): Promise<Subject> {
    return this.subjectsRepository.save(dto);
  }

  async update(id: number, dto: UpdateSubjectDto): Promise<Subject> {
    await this.subjectsRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    await this.subjectsRepository.delete(id);

    return true;
  }
}
