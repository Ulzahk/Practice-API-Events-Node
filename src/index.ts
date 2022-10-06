import express from 'express';
import events from 'events';

// const router = express.Router();
const eventsEmitter = new events.EventEmitter();

//Defining an event
eventsEmitter.on('test', () => {
  console.log('Test Event Successful!');
});

const app = express();

app.get('/', (req, res) => {
  //Subscribing to an event
  eventsEmitter.emit('test');
  res.send('Hello World')
});

app.listen(3000);