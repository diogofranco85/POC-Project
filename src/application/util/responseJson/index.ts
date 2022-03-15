import { Response } from "express"

export const success = (response: Response, data: object, statusCode: number = 200): Response => {
    return response.status(statusCode).json({
        success: true,
        result: data,
        message: ''
    })
}

export const error = (response: Response, err: any, statusCode: number = 500): Response => {

    const code = err?.code || statusCode;

    return response.status(code).json({
        success: false,
        result: '',
        message: err?.message
    })
}
