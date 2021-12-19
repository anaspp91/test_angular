import { Emirate } from './emirates.model';

export class Authority {

    id!: number;
    nameAr!: string;
    nameEn!: string;  
    code!: string;     
    EmirateId!: string;
    IsShown!: string;
    Emirate!:Emirate;
  }