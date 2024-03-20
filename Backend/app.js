import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
import { errorMiddleware } from "./error/error.js";
import { dbConnection } from "./database/dbConnection.js";
import reservationRouter from "./routes/reservationRoute.js";
dotenv.config({path: "./config/config.env"})

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
})
)

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/reservation", reservationRouter);

dbConnection();
app.get("/", (req, res, next)=>{return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  })})
app.use(errorMiddleware);
export default app;

