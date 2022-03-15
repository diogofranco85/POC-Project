import ClientRepositoryInterface from "../../../src/domain/infra/repository/client/client.repository.interface";
import { Clients } from "../../../src/domain/infra/entity/clients";

export default class ClientRespositoryMock implements ClientRepositoryInterface {

    add(ClientDto): Promise<Clients | null> {
        return null;
    }
    findByDocument(document: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(false);
        })
    }
}