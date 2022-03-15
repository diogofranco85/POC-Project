import { injectable } from 'inversify';
import { getRepository, Repository } from 'typeorm';
import { Clients } from '../../entity/clients';
import ClientRepositoryInterface from './client.repository.interface';
import ClientDto from '../../../facade/client/dto/client.dto';
import Exception from '../../../../application/core/Exception';

@injectable()
class ClientRespository implements ClientRepositoryInterface {

    public async add(dto: ClientDto): Promise<Clients> {
        try {
            const repository: Repository<Clients> = getRepository(Clients);
            const client = await repository.save({
                name: dto.getName,
                document: dto.getDocument
            })

            return client;
        } catch (err) {
            throw new Exception('Error registering customer account', 500);
        }

    }

    public async findByDocument(document: string): Promise<boolean> {
        try {
            const repository: Repository<Clients> = getRepository(Clients);
            const client = await repository.findOne({ document })
            return !!client;
        } catch (err) {
            console.log(err);
            throw new Exception('error searching document', 500);
        }
    }
}

export default ClientRespository;