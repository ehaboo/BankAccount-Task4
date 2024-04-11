import express, { NextFunction, Request, Response } from "express"
import { OperationsModel } from "../2-models/operations-model";
import operationsService from "../5-services/operations-service";


const router = express.Router(); 



// GET http://localhost:4000/api/operations/operations-by-account/:accountNumber
router.get("/operations-by-account/:accountNumber", async (request: Request, response: Response, next: NextFunction  ) => {
    try{
        const accountNumber = request.params.accountNumber;
        const operations = await operationsService.getOperationsByAccountNumber(accountNumber);
        response.json(operations);
    } catch (error) {
        next(error)
    }
})

// POST http://localhost:4000/api/operations
router.post("/", async (request: Request, response: Response, next: NextFunction  ) => {
    try{
        const operation = new OperationsModel(request.body);
        const addedOperation = await operationsService.addOperation(operation);
        response.status(201).json(addedOperation);
    } catch (error) {
        next(error)
    }
});


export default router;