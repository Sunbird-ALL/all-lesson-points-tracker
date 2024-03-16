import { Router } from "express";
import pointerSqlRouter from "./module/pointer_Module/pointerRouter";
import lessonSqlRouter from "./module/lesson_Module/lessonRouter";
import { myDataSource } from "./config/data.config";
import virtualIdSqlRouter from "./module/virtual_Id_Module/virtual_id.router";

const sqlRouter = Router();

sqlRouter.use("/pointer", pointerSqlRouter);

sqlRouter.use("/lesson", lessonSqlRouter);

sqlRouter.use("/virtualId", virtualIdSqlRouter);

// Sql DataBase connection
export function sqlDatabaseConnection() {
    myDataSource
    .initialize()
    .then(() => {
      console.log("\n*************SQL DB connected**************\n")
    })
    .catch((err) => {
      console.error("Error in SQL DB connection", err)
    }) 
}

export default sqlRouter;


