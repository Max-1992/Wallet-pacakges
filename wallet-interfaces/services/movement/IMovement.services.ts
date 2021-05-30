// Import Interface
import { IMovementCreateDto } from '@dtos';
import { IMovement } from '@domain';

export interface IMovementCreateService {
    create(movement: IMovementCreateDto): Promise<void>
}

export interface IMovementGetService {
    find(id: number): Promise<IMovement>
}

export interface IMovementGetAllService {
    findAll(): Promise<IMovement[]>
}

export interface IMovementDeleteService {
    delete(id: number): Promise<void>
}
