import type { CreateUserDto } from "@/modules/users/dtos/create.user.dto";
import type { UpdateUserDto } from "@/modules/users/dtos/update.user.dto";
import { User } from "@/modules/users/users.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {}

	async create({ email, name, username }: CreateUserDto): Promise<User> {
		const user = await this.usersRepository.save({ email, name, username });
		return user;
	}

	async update({ id, name, email, username }: UpdateUserDto): Promise<User> {
		const user = await this.usersRepository.save({ id, email, name, username });
		return user;
	}

	async findAll(): Promise<User[]> {
		const users = await this.usersRepository.find();
		return users;
	}

	async delete(id: number): Promise<void> {
		await this.usersRepository.delete(id);
	}
}
