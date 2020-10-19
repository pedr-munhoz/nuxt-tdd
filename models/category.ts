import { BaseModel } from '@/models/baseModel';

export class Category extends BaseModel {
  id: number = 0;
  name: string = '';
  description: string = '';
  status: boolean = false;
}
