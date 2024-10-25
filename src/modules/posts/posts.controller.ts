import type { CreatePostDto } from "@/modules/posts/dtos/create.post.dto";
import type { HttpUpdatePostDto } from "@/modules/posts/dtos/update.post.dto";
import type { Post as PostEntity } from "@/modules/posts/posts.entity";
import { PostsService } from "@/modules/posts/posts.service";
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

@Controller("posts")
export class PostsController {
	constructor(
		@Inject(PostsService)
		private readonly postsService: PostsService,
	) {}

	@Post("/")
	async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
		const post = await this.postsService.create(createPostDto);
		return post;
	}

	@Put("/:id")
	async update(
		@Param("id") id: string,
		@Body() updatePostDto: HttpUpdatePostDto,
	): Promise<PostEntity> {
		const post = await this.postsService.update({
			id: +id,
			...updatePostDto,
		});

		return post;
	}

	@Get("")
	async findAll(): Promise<PostEntity[]> {
		const posts = await this.postsService.findAll();
		return posts;
	}

	@Delete("/:id")
	async delete(@Param("id") id: string): Promise<void> {
		await this.postsService.delete(+id);
	}
}
