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

  if (config) {
    console.log('Method is used with parameters');

    Object.keys(config).forEach(key => console.log(`${key}: ${config[key]}`));
  }

  console.log('START:');
  console.log('-------------------------------\n');

  const callback = config ? debounce(getCallback(), {wait: WAIT, ...config}) : debounce(getCallback(), {wait: WAIT});

  TIMEOUTS.forEach((timeout, i) => {
    setTimeout(() => {
      const now = new Date();
      console.log(`TRY №${++i} at ${now}`);
      callback(now, i);
      console.log('*********************\n');
    }, timeout);
  });
}