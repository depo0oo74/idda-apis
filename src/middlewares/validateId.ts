import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
const objectId: typeof Types.ObjectId = Types.ObjectId;

const validateId = (req: Request, res: Response, next: NextFunction) => {
    const elementId: string = req.params.id
    if (!objectId.isValid(elementId)) {
        return res.status(400).send({
            status: "Error",
            message: "Invalid ID format",
        });
    } else {
        next();
    }
}

export default validateId;