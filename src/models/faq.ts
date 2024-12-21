import { Schema, model } from "mongoose";

// ** Schema Interface
interface IFaq {
    question: string;
    answer: string;
}

// ** Create schema
const faqSchema = new Schema<IFaq>(
    {
        question: {
            type: String,
            required: [true, 'Question is required'],
            unique: true,
            validate: {
                validator: async function (value: string) {
                    const count: number = await this.model('faq').countDocuments({ question: value });
                    return count === 0;
                },
                message: 'Question must be unique!'
            }
        },
        answer: {
            type: String,
            required: [true, 'Answer is required'],
            unique: true,
            validate: {
                validator: async function (value: string) {
                    const count: number = await this.model('faq').countDocuments({ answer: value });
                    return count === 0;
                },
                message: 'Answer must be unique!'
            }
        }
    },
    {
        timestamps: true
    }
) 

// ** Create model
const faqModel = model('faq', faqSchema)

export default faqModel