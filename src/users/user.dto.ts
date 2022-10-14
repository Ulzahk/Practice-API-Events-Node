import { User } from './user.model';

export interface CreateUserDto
  extends Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'> {}

export interface UpdateUserDto extends Partial<CreateUserDto> {}
