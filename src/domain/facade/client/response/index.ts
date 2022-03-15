import { injectable } from "inversify"

@injectable()
class ClientResponse {


    response(value) {
        return {
            id: value.id,
            name: value.name,
            document: value.document,
            createdAt: value.created_at
        }
    }
}

export default ClientResponse