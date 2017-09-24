import { waiter } from './index';

const DELAY = 1000;

const f = waiter(console.log, DELAY);

export default () => {
  console.log('Test for waiter method started');

  console.log('-------------------------------\n');

  console.log(`Starting function to be executed after ${DELAY} ms.`);

  f('Executing function must be called');

  setTimeout(() => {
     console.log('-------------------------------\n');
    console.log(`Starting function to be executed after ${DELAY} ms but it will be canceled after ${DELAY / 2} ms.`);

    f('Executing function must be ignored');

    setTimeout(() => {
      console.log('-------------------------------');
      console.log('Canceling function.');
      console.log('-------------------------------\n');
      f();
    }, DELAY / 2);
  }, 5 * DELAY);
}