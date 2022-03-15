import { Request, Response } from "express"

interface ClientControllerInteface {

    create(request: Request, response: Response): Promise<Response>
}

export default ClientControllerInteface;