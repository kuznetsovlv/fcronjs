import { debounce } from './index';

const WAIT = 200;

const TIMEOUTS = [0, 10, 100, 300, 500, 1000, 1500, 3000, 3010];

const getCallback = () => {
  let count = 0;

  return function (date, tring) {

    const now = new Date();

    console.log(`\nCall №${++count}`);

    console.log(`Try №${tring}`)

    console.log(`The function has been added to call steck at ${date}.`);

    console.log(`The function has been called at ${now}.`);

    console.log(`The function has been waited ${now.getTime() - date.getTime()} ms.`);
    console.log(`Current context ${this}`);

    console.log('--------------------------------------------------------\n');
  }
};


export default (config) => {
  console.log('Test for debounce method started');

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

  console.log('START:');
  console.log('-------------------------------\n');

  let callback;

  if (config === null || config === undefined) {
    callback = debounce(getCallback(), {delay: WAIT});
  } else {
    callback = typeof config  === 'object' ? debounce(getCallback(), {delay: WAIT, ...config}) : debounce(getCallback(), config);
  }

  TIMEOUTS.forEach((timeout, i) => {
    setTimeout(() => {
      const now = new Date();
      console.log(`TRY №${++i} at ${now}`);
      callback(now, i);
      console.log('*********************\n');
    }, timeout);
  });
}