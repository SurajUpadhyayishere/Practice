import { TodoListModel } from "../models/todoList.model.js"

//Getting All The Task
export const getAllTasks  = async (req,res,next) =>{
 try {
    const tasks = await TodoListModel.find().createAt(-1)
    res.status(200).json(tasks)
 } catch (error) {
    console.log(error)
    next(error)
 }
}

//Getting The Task
export const getTasks = async (req,res,next) => {
   try {
    const task = await TodoListModel.findById(req.params.id)
    if(!task) return res.status(404).json({message:"Task Not Found"})
    res.status(200).json(task)
   } catch (error) {
    console.log(error)
    next(error)
   }
}

//Create The Task
export const createTasks = async (req,res,next) =>{
  try {
    const {  task  , description}  =  req.body;
    const createTask =  new TodoListModel({task,description})
    const saveTask =  await createTask.save()
    res.status(201).json(saveTask)
  } catch (error) {
    console.error("Creating Error",error)
    next(error)
  }
}

//Update The Task
export const  updateTasks = async (req,res,next) => {
  try {
    const {task,description} = new  req.body()
    const update = await TodoListModel({task,description})
    if(!update) return res.status(404).json({success:false,message:"Updation Of Task Is Fail"})
      res.status(200).json(update)
  } catch (error) {
    console.log(error)
    next(error)
  }
}


//Delete the Task
export const deleteTasks = async(req,res,next) => {
    try {
        c
    } catch (error) {
        
    }
}