import { throttle } from './index';

const DELAY = 200;
const TIMEOUTS = [0, 10, 50, 100, 150, 200, 220, 230, 240, 600, 610, 620, 850, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1520, 1600, 2000, 2120];
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

export default (config) => {
  console.log('Test for throttle method started');

  if (config !== null && config !== undefined) {
    switch (typeof config) {
      case 'object':
        console.log('Method is used with parameters');

        Object.keys(config).forEach(key => console.log(`${key}: ${config[key]}`));
        break;
      case 'number':
        console.log(`Method is used with delay ${config} ms.`)
    }
  }

  console.log('-------------------------------\n');

  let callback;

  if (config === null || config === undefined) {
    callback = throttle(testThrottle, DELAY);
  } else {
    callback = typeof config  === 'object' ? throttle(testThrottle, {delay: DELAY, ...config}) : throttle(testThrottle, config);
  }

  TIMEOUTS.forEach((x, i) => {
    const text = `Try №${++i} with timeout ${x}.${i === TIMEOUTS.length ? ' Must be called!' : ''}`;

    setTimeout(() => {
      console.log(`Try №${i} whith timeout ${x}.`);

      if (i < TIMEOUTS.length / 2) {
        callback(new Date(), text);
      } else {
        callback.call(CONTEXT, new Date(), text);
      }

      console.log('***************************************');
    }, x);
  });
}