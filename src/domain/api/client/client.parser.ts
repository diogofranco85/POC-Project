import { Request } from "express";
import { injectable } from "inversify";
import ClientDto from '../../facade/client/dto/client.dto';

interface IClientRequest {
    name: string,
    document: string
}

@injectable()
class ClientParser {

    private dto: ClientDto;

    constructor() {
        this.dto = new ClientDto();
    }

    public parserCreate(request: Request): ClientDto {
        const { name, document }: IClientRequest = request.body;
        this.dto.setName = name;
        this.dto.setDocument = document;
        return this.dto;
    }
}

export default ClientParser