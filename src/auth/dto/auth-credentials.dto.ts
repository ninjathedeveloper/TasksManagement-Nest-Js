import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    @IsString()
    userName: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(32)
    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    })
    password: string;
}