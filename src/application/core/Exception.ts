class Exception extends Error {

    public statusCode: number;
    public code: number;

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.message = message;
        this.code = statusCode;
    }

}

export default Exception

