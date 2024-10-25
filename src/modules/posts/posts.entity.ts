import { User } from "@/modules/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 500 })
	name: string;

	@Column("text")
	description: string;

	@ManyToOne(
		() => User,
		(user) => user.posts,
	)
	@Column({ name: "user_id" })
	userId: number;
}
