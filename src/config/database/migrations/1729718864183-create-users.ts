import { type MigrationInterface, type QueryRunner, Table } from "typeorm";

export class CreateUsers1729718864183 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "users",
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
						name: "email",
						type: "varchar",
						length: "100",
						isUnique: true,
					},
					{
						name: "username",
						type: "varchar",
						length: "100",
						isUnique: true,
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }
}
