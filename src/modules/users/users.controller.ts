import type { CreateUserDto } from "@/modules/users/dtos/create.user.dto";
import type { HttpUpdateUserDto } from "@/modules/users/dtos/update.user.dto";
import type { User } from "@/modules/users/users.entity";
import { UsersService } from "@/modules/users/users.service";
import {
	Body,
	Controller,
	Delete,
	Get,
	Inject,
	Param,
	Post,
	Put,
} from "@nestjs/common";

@Controller("users")
export class UsersController {
	constructor(
		@Inject(UsersService)
		private readonly usersService: UsersService,
	) {}

	@Post()
	async create(@Body() createUserDto: CreateUserDto): Promise<User> {
		const user = await this.usersService.create(createUserDto);
		return user;
	}

	@Put("/:id")
	async update(
		@Param("id") id: string,
		@Body() updateUserDto: HttpUpdateUserDto,
	): Promise<User> {
		const user = await this.usersService.update({
			id: +id,
			...updateUserDto,
		});

		return user;
	}

	@Get()
	async findAll(): Promise<User[]> {
		const users = await this.usersService.findAll();
		return users;
	}

	@Delete("/:id")
	async delete(@Param("id") id: string): Promise<void> {
		await this.usersService.delete(+id);
	}
}
