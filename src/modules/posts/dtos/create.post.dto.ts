import { IsNumber, IsString } from "class-validator";

export class CreatePostDto {
	@IsString()
	name: string;

	@IsString()
	description: string;

	@IsNumber()
	userId: number;
}
