import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';
dotenv.config();

export const myDataSource = new DataSource({
    type: process.env.TYPE,
    host: process.env.HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.SQL_DATABASE_NAME,
    entities: ["src/sql_module/schema/*.ts"],
    logging: false,
    synchronize: true,
});