import { HttpClient } from "@angular/common/http";
import { appConfig } from "../utils/config";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { OperationModel } from "../models/operations-model";

@Injectable({
    providedIn: "root"
})
export class OperationService{

    public constructor( private httpClient: HttpClient ){}

    
    public async getOperationsByAccountNumber(accountNumber:string):Promise<OperationModel[]>{

        const observable = this.httpClient.get<OperationModel[]>(appConfig.operationsByAccountUrl + accountNumber);
        const operations = await firstValueFrom(observable);
        return operations;
        
    }
    
    
    public async addOperation(operation: OperationModel):Promise<void>{

        const observable = this.httpClient.post<OperationModel>(appConfig.operationsUrl, operation );
        await firstValueFrom(observable);
        
    }

}