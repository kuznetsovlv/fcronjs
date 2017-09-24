import { getConfig } from '../utils';

/**
 * Method debounce creates Hi Ordered Function which sets minimal period between calls.
 * @param {Function} func - original function.
 * @param {Object|number} [secondArgument] - in case Object - configurin object,
 *                                           in other case - [config#delay = 100].
 * Configuring object has 3 parameters:
 * @param {number} [config#delay = 100] - minimal number of milliseconds to be waited between calls.
 * @param {boolean} [config#immediate = false] - when immediate = true function calls immediatly
 *                                               if it is possible, in other case it cals after
 *                                               delay ms.
 * @param {Object} [config#context] - context object of function. If context was set it can not
 *                                    be changed or removed.
 * @return {Function} - decorated function.
 */
export default (func, secondArgument) => {
  const { delay = 100, immediate = false, context } = getConfig(secondArgument);
  let timeout;

  const debouncedFunc = function (...args) {
    const callback = () => {
      timeout = null;

      if (!immediate) {
        func.apply(this, args);
      }
    };

    if (timeout) {
      return;
    }

    if (immediate) {
      func.apply(this, args);
    }

    timeout = setTimeout(callback, delay);
  };

  return context && typeof context === 'object' ? debouncedFunc.bind(context) : debouncedFunc;
};
