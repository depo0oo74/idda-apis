import { Request, Response, NextFunction } from "express";

function checkElementExistence (model: any, name: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const elementId: string = req.params.id;
        const elementObj: object = await model.findById(elementId);
        if (!elementObj) {
            return res.status(404).send({
                status: "Error",
                message: `This ${name} dosn't exist`
            });
        }
        res.locals.elementObj = elementObj;
        next();
    }
}

export default checkElementExistence;