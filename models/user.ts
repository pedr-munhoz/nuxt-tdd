import { Gender } from '@/models/enums/gender';
import { BaseModel } from '@/models/baseModel';

export class User extends BaseModel {
  email: string = '';
  gender: Gender = Gender.Female;
}
