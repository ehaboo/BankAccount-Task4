
// Base client error:
abstract class ClientError{

    public status: number;
    public message: string;

    public constructor( status: number, message: string ){
        this.status = status;
        this.message = message;
    }
}

// Route not found error:
export class RouteNotFoundError extends ClientError{
    public constructor(route:string){
        super(404, `Route: ${route} not found`);
    }
}

// Resource not found error:
export class ResourceNotFoundError extends ClientError{
    public constructor(_id:string){
        super(404, `ID: ${_id} not found`);
    }
}

// Validatin error:
export class ValidationError extends ClientError{
    public constructor( message:string){
        super(400, message);
    }
}


