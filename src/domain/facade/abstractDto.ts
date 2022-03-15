import { injectable } from "inversify";

@injectable()
abstract class AbastractDto {

    id: number;

    get getId(): number {
        return this.id;
    }

    set setId(id: number) {
        this.id = id
    }

}

export default AbastractDto;