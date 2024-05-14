import "dotenv/config";
import Express from "express";
import todoRoute from "./routes/todoRoute.js";

const app = Express()

app.use(Express.json())

app.use("/api/todos",todoRoute)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log("Server running on port "+ PORT);
});


// https://www.youtube.com/watch?v=5V5VtLvDNks&t=1605s seguir minuto 55:00