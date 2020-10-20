import { BaseModel } from '@/models/baseModel';

export class Product extends BaseModel {
  price: number = 0;
  image: string = '';
  description: string = '';
}
