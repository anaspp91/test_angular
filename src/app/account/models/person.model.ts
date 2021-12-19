import { Country } from './country.model';
import { Gender } from './gender.model';

export class Person {
    Id!: number;
    Name!: string;
    NationalityId!: string;
    EmiratesId!: string;    
    EmiratesIdCopyUrl!: string;
    EmiratesIdCopyUrlFullPath!: string;
    PassportCopyUrl!: string;
    PassportCopyUrlFullPath!: string;
    GenderId!: number;
    Gender!:Gender;
    DateOfBirth!:Date;
    PhotoUrl!: string;
    PhotoUrlFullPath!: string;
    CreatedOn!:Date;
    Country!:Country;
    Title!: string;
    AcquitanceFormUrl!: string;
    AcquaintanceFormCopyUrlFullPath!: string;
    IqamaUrl!: string;
    IqamaUrlFullPath!: string;
    IsSmartpass!: boolean;
    AcademicQualificationUrl!: string;
    AcademicQualificationUrlFullPath!: string;
    PreviousJob!: string;
    TwitterAccount!: string;
    NameAr!: string;
    TitleAr!: string;
  }