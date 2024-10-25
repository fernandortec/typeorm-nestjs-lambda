import { DataSource, type DataSourceOptions } from "typeorm";

export const databaseConfig: DataSourceOptions = {
	type: "sqlite",
	database: "test.db",
	entities: ["dist/**/*.entity.js"],
	synchronize: true,
	migrations: ["dist/src/config/database/migrations/*.{ts,js}"],
};

export const dataSource = new DataSource(databaseConfig);
