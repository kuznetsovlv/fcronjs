/**
 * Method debounce creates Hi Ordered Function which sets minimal period between calls
 * and execute last call every time.
 * @param {Function} func - original function.
 * @param {number} [period = 100] - minimal number of milliseconds to be waited between calls.
 * @return {Function} - decorated function.
 */
export default (func, period = 100) => {
  let timeout;
  let argList;
  let context;

  return function (...args) {
    if (timeout) {
      argList = args;
      context = this;
    } else {
      argList = context = null;

      func.apply(this, args);

      timeout = setTimeout(() => {
        timeout = null;

        if (argList) {
          func.apply(context, argList);
        }
      }, period);
    }
  };
};
