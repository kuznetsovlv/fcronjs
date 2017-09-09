export default (func, wait = 100, immediate = false, context) => {
  let timeout;

  const debouncedFunc = function (...args) {
    const callback = () => {
      timeout = null;

      if (!immediate) {
        func.apply(this, args);
      }
    };

    if (timeout) {
      clearTimeout(timeout);
    } else if (immediate) {
      func.apply(this, args);
    }

    timeout = setTimeout(callback, wait);
  };

  return context && typeof context === 'object' ? debouncedFunc.bind(context) : debouncedFunc;
};
