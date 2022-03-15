import { Response, Request } from 'express';
import * as responseJson from '../../../application/util/responseJson';
import { inject } from 'inversify';
import { controller, httpPost } from 'inversify-express-utils';
import ClientFacadeInterface from '../../facade/client/client.interface';
import ClientControllerInteface from './client.interface';
import ClientParser from './client.parser';
import TYPES from '../../../application/config/container';
import ClientDto from '../../facade/client/dto/client.dto';

@controller('/client')
class Clients implements ClientControllerInteface {

    private parser: ClientParser;
    private service: ClientFacadeInterface;

    constructor(
        @inject(TYPES.ClientFacadeInterface) service: ClientFacadeInterface,
        @inject(TYPES.ClientParser) parser: ClientParser
    ) {
        this.service = service;
        this.parser = parser;
    }

    @httpPost('/create')
    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const acl: ClientDto = this.parser.parserCreate(request);
            const data = await this.service.createClient(acl);
            return responseJson.success(response, data);
        } catch (err) {
            return responseJson.error(response, err);
        }
    }

}

export default Clients;