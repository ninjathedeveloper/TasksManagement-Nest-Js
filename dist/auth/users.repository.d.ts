import { DataSource, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
export declare class UsersRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    createUser(authCredentialsDto: AuthCredentialsDto): Promise<void>;
}
