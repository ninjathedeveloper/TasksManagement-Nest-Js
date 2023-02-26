import { User } from 'src/auth/user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
export declare class TaskRepository extends Repository<Task> {
    private dataSource;
    constructor(dataSource: DataSource);
    private logger;
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>;
    createTask({ title, description }: CreateTaskDto, user: User): Promise<Task>;
}
