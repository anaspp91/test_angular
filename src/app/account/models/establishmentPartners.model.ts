import { Person } from './person.model';
import { MiniUserEstablishment } from './miniUserEstablishment.model';
export class EstablishmentPartners {
    Id!: number;
    PersonId!: number;
    PartnerEstablishmentId!: number;    
    IsOwner!: boolean;
    EstablishmentId!: string;
    CreatedOn!: Date;
    Person!:Person
    PartnerEstablishment!:MiniUserEstablishment;
    DeletedOn!:Date
}