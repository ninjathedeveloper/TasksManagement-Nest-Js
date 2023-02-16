import { DataSource, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
export declare class TaskRepository extends Repository<Task> {
    private dataSource;
    constructor(dataSource: DataSource);
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    createTask({ title, description }: CreateTaskDto): Promise<Task>;
}
