import express from "express";
import { getAll, getById, create, updateById, deleteById } from "../controllers/faqs";
import faqModel from '../models/faq'
import validateId from "../middlewares/validateId";
import checkElementExistence from "../middlewares/checkElementExistence";

const router = express.Router()

// ** get all
router.get("/api/v1/faqs", getAll);

// ** get by id
router.get(
    "/api/v1/faqs/:id", 
    validateId, 
    checkElementExistence(faqModel, "faq"),
    getById
);

// ** create 
router.post(
    "/api/v1/faqs",
    express.json(),
    create
);

// ** update by id
router.put(
    "/api/v1/faqs/:id",
    express.json(),
    validateId,
    checkElementExistence(faqModel, "faq"),
    updateById
);

// ** delete by id
router.delete(
    "/api/v1/faqs/:id", 
    validateId, 
    checkElementExistence(faqModel, "faq"),
    deleteById
);


export default router;
