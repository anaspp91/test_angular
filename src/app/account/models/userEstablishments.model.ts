import { MiniUserEstablishment } from './miniUserEstablishment.model';

export class UserEstablishment {

    Id!: number;
    UserProfileId!: number;
    EstablishmentId!: number;    
    PhoneNumber!: number;
    password!: string;
    ConfirmPassword!: string;
    EstablishmentPartners!: MiniUserEstablishment[];
  }