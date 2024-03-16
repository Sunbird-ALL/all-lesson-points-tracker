import { Router } from "express";
import pointerController from "./pointerController";

const pointerSqlRouter = Router();

pointerSqlRouter.post("/addPointer", pointerController.addPointer);

pointerSqlRouter.get("/getPointers/:userId/:sessionId", pointerController.getPointersByUserId);

export default pointerSqlRouter;