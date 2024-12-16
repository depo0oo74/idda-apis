import {Schema, model} from "mongoose";

// ** Schema Interface
interface ICategory {
    name: string
}

// ** Create schema
const categorySchema = new Schema<ICategory>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            unique: true
        }
    },
    {
        timestamps: true
    }
);

// ** Create model
const categoryModel = model("category", categorySchema);

export default categoryModel;