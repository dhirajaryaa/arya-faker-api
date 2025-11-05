import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.join(__dirname, "..");

export const POSTS = JSON.parse(
  fs.readFileSync(path.join(root, "data/posts.json"), "utf-8")
);

export const TODOS = JSON.parse(
  fs.readFileSync(path.join(root, "data/todos.json"), "utf-8")
);

export const  USERS = JSON.parse(
  fs.readFileSync(path.join(root, "data/users.json"), "utf-8")
);
