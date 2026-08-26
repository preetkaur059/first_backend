import express, { json } from "express"
import dotenv from "dotenv"
import userRouter from "./routes/userRouter.js"
import productsRouter from "./routes/productsRouter.js"

dotenv.config()

const app = express();

app.use(json())

app.use("/users", userRouter)
app.use("/products", productsRouter)


app.get("/", (req, res)=>{
res.json("You server is active")
})




export default app;