/**
 * Converts argument into config for debounce and throttle functions.
 * @params {*} [arg] - argument to be converted inco config object.
 * @return {Object} - config.
 */
export default (arg) => {
  if (arg === null || typeof arg === 'undefined') {
    return { delay: 100, immediate: false };
  }

  if (typeof arg === 'object') {
    const { delay = 100, immediate = false, context } = arg;
    return { delay, immediate, context };
  }

  if (typeof arg === 'string') {
    arg = parseInt(arg, 10);
  }

  if (typeof arg !== 'number' || isNaN(arg)) {
    arg = 0;
  }

  return { delay: arg, immediate: false };
};
