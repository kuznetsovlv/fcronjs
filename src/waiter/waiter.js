/**
 * Method waiter creates Hi Ordered Function which at call
 * waits some time befor call original function, and in
 * case of second call before function called, it stops
 * waiting without calling function.
 * @param {Function} func - original function.
 * @param {number} [delay = 100] - number of milliseconds
 *                                 must be waited before
 *                                 original function call.
 * @return {Function} - decorated function.
 */
export default (func, delay = 100) => {
  let timeout;

  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    } else {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(this, args);
      }, delay);
    }
  };
};
