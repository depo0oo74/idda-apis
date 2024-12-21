import { Request, Response } from "express";
import faqModel from "../models/faq"


// ** get all
export const getAll = async (req: Request , res: Response) => {
    try {
        const total: number = await faqModel.countDocuments()
        const page: number = parseInt(req.query.page as string) || 1
        const limit: number = parseInt(req.query.limit as string) || 10
        const skip: number = limit * (page - 1)
        const data: object = await faqModel.find().skip(skip);
        res.status(200).send({
          status: "Success",
          data: {
            data,
            page,
            limit,
            total,
            lastPage: Math.ceil(total / limit),
          },
        });
    } catch (error) {
        res.status(400).send({
          status: "Error",
          message: error 
        });
    }
};

// ** get by ID 
export const getById = async (req: Request, res: Response) => {
  const data: object = req['element']
  res.status(200).send({
    status: "Success",
    data: data
  })
}

// ** create 
export const create = async (req: Request, res: Response) => {
  try {
    const payload: object = req?.body;
    const newFaq: object = await faqModel.create(payload);
    res.status(201).send({
      status: "Success",
      data: newFaq 
    });
  } catch (error) {
    res.status(400).send({
      status: "Error",
      message: error 
    });
  }
}

// ** update by ID
export const updateById = async (req: Request, res: Response) => {
  try {
    const id: string = req.params?.id
    const payload: object = req?.body;
    const updatedFaq: object = await faqModel.findByIdAndUpdate(id, payload, {new: true, runValidators: true});
    res.status(200).send({
      status: "Success",
      data: updatedFaq
    });
  } catch (error) {
    res.status(400).send({
      status: "Error",
      message: error 
    });
  }
}


// ** delete by ID 
export const deleteById = async (req: Request, res: Response) => {
  try {
    const id = req.params?.id;
    await faqModel.deleteOne({ _id: id });
    res.status(200).send({
      data: {
        status: "Success",
        message: "The faq has been deleted successfully"
      },
    });
  } catch (error) {
    res.status(400).send({
        status: "Error",
        message: error 
    });
  }
}