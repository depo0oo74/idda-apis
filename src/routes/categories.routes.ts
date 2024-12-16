import express from "express";
const router = express.Router();
import { getAllCategories, getCategoryById, createCategory, updateCategoryById, deleteCategoryById } from "../controllers/categories.controllers";
import categoryModel from "../models/category.model";
import validateId from "../middlewares/validateId";
import checkElementExistence from "../middlewares/checkElementExistence";

// ** get all categories
router.get("/api/v1/categories", getAllCategories);

// ** get specific category
router.get(
    "/api/v1/categories/:id", 
    validateId, 
    checkElementExistence(categoryModel, "category"),
    getCategoryById
);

// ** create a new category
router.post(
    "/api/v1/categories",
    express.json(),
    createCategory
);

// ** update specific category
router.put(
    "/api/v1/categories/:id",
    express.json(),
    validateId,
    checkElementExistence(categoryModel, "category"),
    updateCategoryById
);

// ** delete specific category
router.delete(
    "/api/v1/categories/:id", 
    validateId, 
    checkElementExistence(categoryModel, "category"), 
    deleteCategoryById
);


export default router;
