import { Post } from "@/modules/posts/posts.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 100 })
	name: string;

	@Column({ length: 100, unique: true })
	email: string;

	@Column({ length: 100, unique: true })
	username: string;

	@OneToMany(
		() => Post,
		(post) => post.userId,
	)
	posts: Post[];
}
