import { BaseModel } from "../common/base.model";

export interface User extends BaseModel {
  fullname: string;
  email: string;
  password: string;
} 