import { Address } from './address.model';
import { GovernmentType } from './govermentType.model';
import { Language } from './language.model';
import { Person } from './person.model';
import { UserType } from './usertype.model';
import { UserEstablishment } from './userEstablishments.model';

export class userProfile {
    UserId!: string;
    UserTypeId!: any;
    PersonId!: number;    
    GovernmentTypeId!: number;
    GovernmentType!:GovernmentType;
    Language!:Language;
    Person!:Person;
    UserType!:UserType;
    AddressId!: number;
    Address!:Address;
    MediaFileNumber!: string;
    OfficialLetterUrl!:string;
    DefaultLanguageId!: number;
    CreatedOn!: Date;
    IsCompleted!:string;
    UserEstablishments!:UserEstablishment[];

}