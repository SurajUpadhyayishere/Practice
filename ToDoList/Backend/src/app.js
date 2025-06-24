import express  from "express"

//import components
import ConnectDB from "./database/mongodb.js"
import todoList from "./router/todoList.router.js"

const app = express()

app.use("/api/todolist",todoList)

//common middlewar
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))


app.listen(5000,() =>{
    console.log(`Server is running on http://localhost:5000`)
    ConnectDB
})