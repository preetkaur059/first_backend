import express, { json } from "express"
import dotenv from "dotenv"
import userRouter from "./routes/userRouter"

dotenv.config()

const app = express();

app.use(json())

app.use("/users", userRouter)


app.get("/", (req, res)=>{
res.json("You server is active")
})




export default app;