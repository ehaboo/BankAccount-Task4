import mongoose, { VirtualType } from "mongoose";


enum OperationType{
    "withdraw",
    "deposit",
    "loan"
}

export interface IOperationsModel extends mongoose.Document {
    accountNumber: string;
    operationType:OperationType;
    amount:number; 
    dateTime: Date; 
    interest: number; 
    payments: number; 
}

export const OperationsSchema = new mongoose.Schema<IOperationsModel>({
    accountNumber: {
        type: String,
        required: [true, "Missing Account Number"], 
        minlength:[4, "Account Number must be more then 4 charts"], 
        maxlength:[9, "Account Number can't be more than 9 charts"]
    },
    operationType: String, 
    amount: {
        type: Number,
        required: [true, "Missing Amount"], 
        min:[100, "Amount must be more then 100"], 
        max:[5000, "Amount can't be more than 5000"]
    },
    dateTime: {
        type: Date,
        default: Date.now
    },
    interest: {
        type: Number,
        min:[0 , "Interest can't be Negative"], 
        max:[50, "Interest can't be more that 50%"]
    }, 
    payments:{
        type:Number, 
        min:[1, "Payments must be between 1 - 12"],
        max:[12, "Payments must be between 1 - 12"]
    }
    
}, {
    versionKey: false,
   
})




export const OperationsModel = mongoose.model<IOperationsModel>("OperationsModel", OperationsSchema, "AccountOperations");

