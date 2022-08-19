export interface Person {
  
  fullName: string;
  birthDate: string;
  profession: string;
  sex: number;
  location: string;
  street: string;
  house: string;
  flat: string;
  jobPlace: string;
  socialStatusId : number;
  socialGroupId : number;
  categoryId : number;
  districtId : number;
}

export interface Base {
  id: number;
  name: string;
}

export interface Reference extends Base {}

export interface SocialGroup extends Base {}
