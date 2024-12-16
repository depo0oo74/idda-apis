import { Request, Response } from "express";
import categoryModel from "../models/category.model";


// ** get all categories
export const getAllCategories = async (req: Request , res: Response) => {
  const categories = await categoryModel.find();
  res.status(200).send({
    status: "Success",
    data: categories,
  });
};

// ** get category by ID 
export const getCategoryById = async (req: Request, res: Response) => {
  const category: object = res.locals?.elementObj
  res.status(200).send({
    status: "Success",
    data: category
  })
}

// ** create new category 
export const createCategory = async (req: Request, res: Response) => {
  try {
    const payload: object = req?.body;
    const newCategory = await categoryModel.create(payload);
    res.status(201).send({
      status: "Success",
      data: newCategory 
    });
  } catch (error) {
    res.status(400).send({
      status: "Error",
      message: error 
    });
  }
}

// ** update category by ID
export const updateCategoryById = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params?.id
    const payload: object = req?.body;
    const updatedCategory = await categoryModel.findByIdAndUpdate(categoryId, payload, {new: true, runValidators: true});
    res.status(200).send({
      status: "Success",
      data: updatedCategory
    });
  } catch (error) {
    res.status(400).send({
      status: "Error",
      message: error 
    });
  }
}


// ** delete category by ID 
export const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params?.id;
    await categoryModel.deleteOne({ _id: categoryId });
    res.status(200).send({
      data: {
        status: "Success",
        message: "The category has been deleted successfully"
      },
    });
  } catch (error) {
    console.log(error)
  }
}