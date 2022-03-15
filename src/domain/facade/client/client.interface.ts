import ClientDto from "./dto/client.dto";

interface ClientFacadeInterface {

    createClient(dto: ClientDto)

}

export default ClientFacadeInterface;