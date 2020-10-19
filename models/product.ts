import { BaseModel } from '@/models/baseModel';

export class Product extends BaseModel {
  id: number = 0;
  name: string = '';
  description: string = '';
  price: number = 0;
  status: boolean = false;
  image: string = '';
}
