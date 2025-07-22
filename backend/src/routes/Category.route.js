import express from "express";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  showCategory,
  updateCategory,
} from "../controllers/Category.controller.js";
import { onlyadmin } from "../middleware/onlyAdmin.js";

const CategoryRoute = express.Router();

CategoryRoute.post("/add", onlyadmin, addCategory);

CategoryRoute.get("/all-category", getAllCategory);

CategoryRoute.get("/show/:categoryid", onlyadmin, showCategory);

CategoryRoute.put("/update/:categoryid", onlyadmin, updateCategory);

CategoryRoute.delete("/delete/:categoryid", onlyadmin, deleteCategory);

export default CategoryRoute;
