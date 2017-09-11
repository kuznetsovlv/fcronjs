import debounceTest from './debounce-test';
import throttleTest from './throttle-test';

const args = process.argv;

const findArgument = (argument) => args.indexOf(argument);

const checkForKeys = (index, ...keys) => {
  const hash = keys.reduce((hash, key) => ({ ...hash, [key]: true }), {});
  return keys.map((key, i) => args[index + i + 1]).filter(x => x && hash[x]);
}

const debounceIndex = findArgument('debounce');
const throttleIndex = findArgument('throttle');

if (debounceIndex >= 0) {
  const keys = checkForKeys(debounceIndex, 'immediate', 'context');

  const { length } = keys;
  
  if (length === 0) {
    debounceTest();
  } else {
    const config = keys.reduce((conf, key) => {
      switch (key) {
        case 'immediate': return { ...conf, immediate: true };
        case 'context':
          const context = {
            toString() {
              return '-TEST CONTEXT-';
            }
          };
          return { ...conf, context };
      }
    }, {});
    debounceTest(config);
  }
}

if (throttleIndex >= 0) {
  throttleTest();
}
