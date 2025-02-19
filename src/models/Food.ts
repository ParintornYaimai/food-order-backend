import mongoose,{Schema, Document} from "mongoose";

export interface FoodDoc extends Document{
    vanderId: string;
    name: string;
    description: string;
    category: string;
    foodType: string;
    readyTime: number;
    price: number;
    rating: number;
    images: [string];
}

const foodSchema = new Schema({
    vandorId: { type: String},
    name: { type: String, required: true},
    description: { type: String, required: true},
    category: { type: String},
    foodType:  { type: String},
    readyTime:  { type: Number},
    price: { type: Number},
    rating: { type: Number},
    images: { type: [String]},

},{
    toJSON: {
        transform(doc,ret){
            delete ret.__v,
            delete ret.createdAt,
            delete ret.updatedAt
        }
    },
    timestamps: true
})

export const Food = mongoose.model<FoodDoc>('food',foodSchema);
