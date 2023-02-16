import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTaskById(id: string): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: string): Promise<void>;
}
