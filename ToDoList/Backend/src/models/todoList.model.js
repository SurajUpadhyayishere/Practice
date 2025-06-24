import mongoose from "mongoose";

//step 1: Create Schema
//Step 2: Models

const TodoListSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      Required: true,
    },
    description:{
        type:String,
        Required:true,
    }
  },
  { timestamps: true }
);

export const TodoListModel =  mongoose.model(
  "TodoListModel",
  TodoListSchema
);
