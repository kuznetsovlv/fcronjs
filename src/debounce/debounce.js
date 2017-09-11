/**
 * Method debounce creates Hi Ordered Function which sets minimal period between calls.
 * @param {Function} func - original function.
 * @param {Object} [config = {}] - configurin object.
 * @param {number} [config#wait = 100] - minimal number of milliseconds to be waited between calls.
 * @param {boolean} [config#immediate = false] - when immediate = true function calls immediatly
 *                                               if it is possible, in other case it cals after
 *                                               wait ms.
 * @param {Object} [config#context] - context object of function. If context was set it can not
 *                                    be changed or removed.
 * @return {Function} - decorated function.
 */
export default (func, config = {}) => {
  const { wait = 100, immediate = false, context } = config;
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

    timeout = setTimeout(callback, wait);
  };

  return context && typeof context === 'object' ? debouncedFunc.bind(context) : debouncedFunc;
};
