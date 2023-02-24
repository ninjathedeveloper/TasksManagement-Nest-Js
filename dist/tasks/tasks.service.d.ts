import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';
import { User } from 'src/auth/user.entity';
export declare class TasksService {
    private readonly tasksRepository;
    constructor(tasksRepository: TaskRepository);
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    getTaskById(id: string): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    deleteTask(id: string): Promise<void>;
    updateTaskStatus(id: string, status: TaskStatus): Promise<Task>;
}
