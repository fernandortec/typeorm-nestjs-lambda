import type { CreatePostDto } from "@/modules/posts/dtos/create.post.dto";
import type { UpdatePostDto } from "@/modules/posts/dtos/update.post.dto";
import { Post } from "@/modules/posts/posts.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";

@Injectable()
export class PostsService {
	constructor(
		@InjectRepository(Post)
		private postsRepository: Repository<Post>,
	) {}

	async create({ description, name, userId }: CreatePostDto): Promise<Post> {
		const post = await this.postsRepository.save({
			description,
			name,
			userId,
		});
		return post;
	}

	async update({
		id,
		description,
		name,
		userId,
	}: UpdatePostDto): Promise<Post> {
		const post = await this.postsRepository.save({
			description,
			name,
			userId,
			id,
		});
		return post;
	}

	async findAll(): Promise<Post[]> {
		const posts = await this.postsRepository.find();
		return posts;
	}

	async delete(id: number): Promise<void> {
		await this.postsRepository.delete(id);
	}
}
