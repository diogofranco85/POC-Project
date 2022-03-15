import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ClientDto from './dto/client.dto';
import ClientFacadeInterface from './client.interface';
import ClientResponse from './response';
import TYPES from '../../../application/config/container';
import ClientRepositoryInterface from '../../infra/repository/client/client.repository.interface';
import Exception from '../../../application/core/Exception';


@injectable()
export default class ClientFacade implements ClientFacadeInterface {

    private repository: ClientRepositoryInterface;
    private response: ClientResponse;


    constructor(
        @inject(TYPES.ClientRepositoryInterface) repository: ClientRepositoryInterface,
        @inject(TYPES.ClientResponse) response: ClientResponse
    ) {
        this.repository = repository;
        this.response = response;

    }

    async createClient(dto: ClientDto) {
        const exist = await this.repository.findByDocument(dto.getDocument);

        if (exist)
            throw new Exception('document already exists', 400);

        const resultObject = await this.repository.add(dto);

        return this.response.response(resultObject);
    }

}

