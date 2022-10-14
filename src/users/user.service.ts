import fs from 'fs';
import path from 'path';
import { CreateUserDto } from './user.dto';

export class UserService {
  create(data: CreateUserDto) {}

  getById() {}

  getAll(res: any) {
    fs.readFile(
      path.join(__dirname, '../storage.json'),
      'utf-8',
      (err, data: any) => {
        if (err) {
          res.status(500).json({
            success: false,
            error: err,
          });
        } else {
          res.status(200).json({
            message: 'Users listed',
            data: JSON.parse(data).users,
          });
        }
      },
    );
  }

  update() {}

  delete() {}
}
