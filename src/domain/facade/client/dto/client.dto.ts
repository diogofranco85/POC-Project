import { injectable } from 'inversify';
import Exception from '../../../../application/core/Exception';
import AbastractDto from '../../abstractDto';

@injectable()
class ClientDto extends AbastractDto {

    private name: string;

    private document: string;

    set setName(name: string) {
        this.name = name;
    }

    get getName(): string {
        return this.name;
    }

    set setDocument(document: string) {

        this.document = document.replace(/[^\d]+/g, '');

        if (this.document.length != 11)
            throw new Exception('Document invalid  ', 400);

    }

    get getDocument() {
        return this.document;
    }

}

export default ClientDto;