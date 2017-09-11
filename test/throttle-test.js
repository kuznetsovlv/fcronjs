import { throttle } from './index';

const PERIOD = 200;
const TIMEOUTS = [0, 10, 50, 100, 150, 200, 220, 230, 240, 600, 610, 620, 850, 900, 1000, 1500, 1520];
const CONTEXT = {
  toString() {
    return '-TEST CONTEXT-';
  }
};

function testThrottle (date, text) {
  const now = new Date();
  console.log(text);
  console.log(`Function called at ${date}, and executed at ${now}`);
  console.log(`Current context is ${this}`);
  console.log('-------------------------------\n');
}

const f = throttle(testThrottle, PERIOD);

export default () => {
  console.log('Test for throttle method started');

  console.log('-------------------------------\n');

  TIMEOUTS.forEach((x, i) => {
    const text = `Try №${++i} with timeout ${x}.${i === TIMEOUTS.length ? ' Must be called!' : ''}`;

    setTimeout(() => {
      console.log(`Try №${i} whith timeout ${x}.`);

      if (i < TIMEOUTS.length / 2) {
        f(new Date(), text);
      } else {
        f.call(CONTEXT, new Date(), text);
      }

      console.log('***************************************');
    }, x);
  });
}