import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "Barbarita19@2021@",
	database: "TypeORM_&_NestJS",
	synchronize: false,
	logging: false,
	entities: ["src/**/*.entity.ts"],
	migrations: ["src/db/migrations/*.ts"],
	subscribers: ["src/db/subscribers/*.ts"],
});
