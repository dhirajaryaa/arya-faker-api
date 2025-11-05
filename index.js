import express from "express";
import path from "path";
import { fileURLToPath } from "url";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

global.__rootdir = __dirname; // used inside route files

const app = express();

// posts 
import postsRouter from "./routes/post.routes.js";
app.use("/api/posts", postsRouter);
// todos 
import todosRouter from "./routes/todo.routes.js";
app.use("/api/todos", todosRouter);
// users
import usersRouter from "./routes/user.routes.js";
app.use("/api/profiles", usersRouter);


// server running 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));
