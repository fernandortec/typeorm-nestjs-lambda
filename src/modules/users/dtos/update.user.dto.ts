import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class HttpUpdateUserDto {
	@IsString()
	@IsOptional()
	name: string;

	@IsEmail()
	@IsOptional()
	email: string;

	@IsString()
	@IsOptional()
	username: string;
}

export class UpdateUserDto extends HttpUpdateUserDto {
	@IsNumber()
	id: number;
}
