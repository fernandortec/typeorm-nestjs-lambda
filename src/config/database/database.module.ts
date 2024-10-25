import { Global, Module } from "@nestjs/common";
import { databaseConfig } from "ormconfig";
import { DataSource } from "typeorm";

@Global()
@Module({
	imports: [],
	providers: [
		{
			provide: DataSource,
			inject: [],
			useFactory: async () => {
				try {
					const dataSource = new DataSource(databaseConfig);

					await dataSource.initialize();
					console.log("Database connected successfully");
					return dataSource;
				} catch (error) {
					console.log("Error connecting to database");
					throw error;
				}
			},
		},
	],
	exports: [DataSource],
})
export class DatabaseModule {}
