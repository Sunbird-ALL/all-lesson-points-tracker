import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';
dotenv.config();

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "new_password",
    database: "lesson_pointer",
    entities: ["src/sql_module/schema/*.ts"],
    logging: false,
    synchronize: true,
});