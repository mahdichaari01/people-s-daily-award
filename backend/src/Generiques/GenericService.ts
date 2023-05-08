import { Injectable, NotFoundException } from '@nestjs/common';
import { PartialObserver } from 'rxjs';
import { Repository } from 'typeorm';

@Injectable()
export class GenericService<T> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id): Promise<T> {
    const t = this.repository.findOne(id);
    if (!t) {
      throw new NotFoundException("ce todo n'existe pas");
    }
    return await this.repository.findOne(id);
  }

  async create(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  async update(id, entity: Partial<T>): Promise<T> {
    const entityToUpdate = await this.repository.findOne(id);
    if (!entityToUpdate) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }

    const updatedEntity = Object.assign(entityToUpdate, entity);
    return this.repository.save(updatedEntity);
  }

  async delete(id): Promise<void> {
    const entityToDelete = await this.repository.findOne(id);
    if (!entityToDelete) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
    await this.repository.delete(id);
  }
}
