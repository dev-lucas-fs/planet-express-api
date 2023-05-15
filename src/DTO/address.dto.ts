export class CreateAddressDTO
{
    name          : string;
    cep           : string;
    street        : string;
    city          : string;
    state         : string;
    number        : string;
    neighborhood  : string;
    addressDetail : string;
    userId?       : number;       
}