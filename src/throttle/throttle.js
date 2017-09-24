import { getConfig } from '../utils';

/**
 * Method throttle creates Hi Ordered Function which sets minimal period between calls
 * and execute last call every time at the end.
 * @param {Function} func - original function.
 * @param {Object|number} [secondArgument] - in case Object - configurin object,
 *                                           in other case - [config#delay = 100].
 * Configuring object has 3 parameters:
 * @param {number} [config#delay = 100] - minimal number of milliseconds to be waited between calls.
 * @param {boolean} [config#immediate = false] - when immediate = true function calls immediatly
 *                                               if it is possible, in other case it cals after
 *                                               delay ms.
 * @return {Function} - decorated function.
 */
export default (func, secondArgument) => {
  const { delay = 100, immediate = false } = getConfig(secondArgument);

  let timeout;
  let argList;
  let context;

  return function (...args) {
    if (timeout) {
      argList = args;
      context = this;
    } else {
      argList = context = null;

      if (immediate) {
        func.apply(this, args);
      }

      timeout = setTimeout(() => {
        timeout = null;

        if (!immediate) {
          func.apply(this, args);
        }

        if (argList) {
          func.apply(context, argList);
        }
      }, delay);
    }
  };
};
