import { BaseModel } from "../common/base.model";

export interface Task extends BaseModel {
  title: string;
  description?: string;
  deadline?: Date;
  isCompleted: boolean;
}