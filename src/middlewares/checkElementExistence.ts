import { Request, Response, NextFunction } from "express";
import { Model } from 'mongoose'

function checkElementExistence (model: typeof Model, name: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const elementId: string = req.params.id;
        const element: object = await model.findById(elementId);
        if (!element) {
            return res.status(404).send({
                status: "Error",
                message: `This ${name} doesn't exist`
            });
        }
        req['element'] = element;
        next();
    }
}

export default checkElementExistence;