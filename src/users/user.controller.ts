import { UserService } from './user.service';
import { coreEventEmitter } from '../common/coreEventEmitter';
import { Event } from '../common/constants';

export class UsersController {
  constructor(
    private eventEmitter: typeof coreEventEmitter,
    private userService: UserService,
  ) {
    this.eventEmitter.on(Event.LIST_USERS, (req, res) => {
      this.userService.getAll(res);
      console.log('Test Event Successful!');
    });
  }
}
