import { DataSource, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
export declare class TaskRepository extends Repository<Task> {
    private dataSource;
    constructor(dataSource: DataSource);
    createTask({ title, description }: CreateTaskDto): Promise<Task>;
}
