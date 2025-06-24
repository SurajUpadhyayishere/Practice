import { Router } from "express";

//import the  controller
import {
  createTasks,
  deleteTasks,
  getAllTasks,
  updateTasks,
  getTasks,
} from "../controller/todoList.controller.js";

const todoList = Router();

//get the all  tasks
todoList.get("/", getAllTasks);

//get the specific tasks
todoList.get("/:id", getTasks);

//create the task
todoList.post("/", createTasks);

//update the task
todoList.put("/:id", updateTasks);

//delete the task
todoList.delete("/:id", deleteTasks);

export default todoList;
