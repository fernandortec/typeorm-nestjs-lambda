import { IsNumber, IsOptional, IsString } from "class-validator";

export class HttpUpdatePostDto {
	@IsString()
	@IsOptional()
	name: string;

	@IsString()
	@IsOptional()
	description: string;

	@IsNumber()
	@IsOptional()
	userId: number;
}

export class UpdatePostDto extends HttpUpdatePostDto {
	@IsNumber()
	id: number;
}
