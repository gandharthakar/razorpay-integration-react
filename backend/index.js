import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/routes.js";

dotenv.config();
const port = process.env.PORT || 4444;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:4173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}));
app.use(routes);

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
})