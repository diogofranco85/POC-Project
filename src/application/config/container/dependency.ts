import { Container } from 'inversify'
import TYPES from '.';

import ClientControllerInterface from '../../../domain/api/client/client.interface';
import ClientController from '../../../domain/api/client/client.controller';
import ClientFacadeInterface from '../../../domain/facade/client/client.interface';
import ClientFacade from '../../../domain/facade/client/client.facade';
import ClientRepositoryInterface from '../../../domain/infra/repository/client/client.repository.interface';
import ClientRespository from '../../../domain/infra/repository/client/client.repository';
import ClientParser from '../../../domain/api/client/client.parser';
import ClientDto from '../../../domain/facade/client/dto/client.dto';
import ClientResponse from '../../../domain/facade/client/response';



let container = new Container({
    autoBindInjectable: true,
    defaultScope: "Singleton"
});

//INTERFACES
container.bind<ClientControllerInterface>(TYPES.ClientControllerInterface).to(ClientController);
container.bind<ClientFacadeInterface>(TYPES.ClientFacadeInterface).to(ClientFacade);
container.bind<ClientRepositoryInterface>(TYPES.ClientRepositoryInterface).to(ClientRespository);

//INVERSION
container.bind<ClientParser>(TYPES.ClientParser).to(ClientParser);
container.bind<ClientDto>(TYPES.ClientDto).to(ClientDto);
container.bind<ClientResponse>(TYPES.ClientResponse).to(ClientResponse);


export default container;