import { PostsController } from "@/modules/posts/posts.controller";
import { Post } from "@/modules/posts/posts.entity";
import { PostsService } from "@/modules/posts/posts.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [TypeOrmModule.forFeature([Post])],
	controllers: [PostsController],
	providers: [PostsService],
	exports: [TypeOrmModule],
})
export class PostsModule {}
