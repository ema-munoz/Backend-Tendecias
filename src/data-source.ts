/** @format */

import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "Barbarita19@2021@",
	database: "TypeORM_&_NestJS",
	synchronize: true,
	logging: true,
	entities: [User],
	migrations: [],
	subscribers: [],
});
