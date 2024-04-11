import {  ValidationError } from "../2-models/client-errors";
import { OperationsModel, IOperationsModel } from "../2-models/operations-model";


function getOperationsByAccountNumber(accountNumber:string):Promise<IOperationsModel[]>{
    return OperationsModel.find({accountNumber}).exec();
}


function addOperation(operation: IOperationsModel): Promise<IOperationsModel>{
    const errors = operation.validateSync();
    if(errors) throw new ValidationError(errors.message);
    return operation.save();
}





export default {
    getOperationsByAccountNumber,
    addOperation
    
}