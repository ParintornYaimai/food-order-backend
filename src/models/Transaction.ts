import mongoose, { Schema, Document } from "mongoose";

export interface TransactionDoc extends Document{
    customer: string,
    vendorId: string,
    orderId: string,
    orderValue: string,
    offerUsed: string,
    paymentMode: string,
    paymentResponse: string,
    status: string
}


const TransactionSchema  = new Schema({
    customer: { type: String },
    vendorId: { type: String },
    orderId: { type: String },
    orderValue: { type: Number },
    offerUsed: { type: String },
    paymentMode: { type: String },
    paymentResponse: { type: String },
    status: { type: String },
},{
    toJSON:{
        transform(doc,ret){
            delete ret.__v,
            delete ret.createdAt,
            delete ret.updatedAt
        }
    },
    timestamps:true
})


export const Transaction = mongoose.model<TransactionDoc>('transaction',TransactionSchema);

