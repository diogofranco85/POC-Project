import { Clients } from '../../entity/clients';
import ClientDto from '../../../facade/client/dto/client.dto';

interface ClientRepositoryInterface {

    add(ClientDto): Promise<Clients | null>;
    findByDocument(document: string): Promise<boolean>;

}

export default ClientRepositoryInterface;
