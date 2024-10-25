import {
	type MigrationInterface,
	type QueryRunner,
	Table,
	TableForeignKey,
} from "typeorm";

export class CreatePosts1729719071018 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "posts",
				columns: [
					{
						name: "id",
						type: "INTEGER",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "name",
						type: "varchar",
						length: "100",
					},
					{
						name: "description",
						type: "varchar",
					},
					{
						name: "user_id",
						type: "INTEGER",
					},
				],
			}),
		);

		await queryRunner.createForeignKey(
			"posts",
			new TableForeignKey({
				columnNames: ["user_id"],
				referencedTableName: "users",
				referencedColumnNames: ["id"],
				name: "posts_user_id",
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("posts");
		await queryRunner.dropForeignKey("posts", "posts_user_id");
	}
}
