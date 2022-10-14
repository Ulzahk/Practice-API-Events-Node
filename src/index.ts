import express from 'express';
import { config } from './config/env.variables';
import { UserService } from './users/user.service';
import { coreEventEmitter } from './common/coreEventEmitter';
import { Event } from './common/constants';

const app = express();

coreEventEmitter.on(Event.TEST, () => {
  console.log('Test Event Successful!');
});

coreEventEmitter.on(Event.LIST_USERS, (req, res) => {
  const usersService = new UserService();
  usersService.getAll(res);
  console.log('Listed Users Successful!');
});

app.get('/', (req, res) => {
  coreEventEmitter.emit(Event.TEST);
  res.send('Hello World');
});

app.get('/v1/users', (req, res) => {
  coreEventEmitter.emit(Event.LIST_USERS, req, res);
});

app.listen(config.port);
