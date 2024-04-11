enum OperationType{
    "withdraw",
    "deposit",
    "loan"
}

export class OperationModel {
    _id: string;
    accountNumber: string;
    operationType:OperationType;
    amount:number; 
    dateTime: Date; 
    interest: number; 
    payments: number; 
}
