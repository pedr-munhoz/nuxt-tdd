import { Gender } from '@/models/enums/gender';

export class User {
  id: number = 0;
  name: string = '';
  description: string = '';
  status: boolean = false;
  email: string = '';
  gender: Gender = Gender.Female;
}
