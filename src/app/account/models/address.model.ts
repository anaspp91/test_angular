import { Community } from './community.model';

export class Address {

    CommunityId!: string;
    Community!: Community;
    Longitude!: number;    
    Latitude!: number;
    Street!: string;    
  }