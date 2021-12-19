export class MiniUserEstablishment {
    Id!: number;
    NameAr!: string;
    NameEn!: string;  
    AddressId!: number; 
    LicenseNumber!: string;
    LicenseCopyUrl!: string;
    LicenseCopyUrlFullPath!: string;
    TenancyContractEndDate!: Date; 
    TenancyContractCopyUrl!: string;
    TenancyContractCopyUrlFullPath!: string;
    HasValidLicense!:boolean;
}