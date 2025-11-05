// index.js

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import serverless from "serverless-http";

import postsRouter from "./routes/post.routes.js";
import todosRouter from "./routes/todo.routes.js";
import usersRouter from "./routes/user.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/api/posts", postsRouter);
app.use("/api/todos", todosRouter);
app.use("/api/users", usersRouter);

export const handler = serverless(app);

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`LOCAL: http://localhost:${PORT}`));
}

