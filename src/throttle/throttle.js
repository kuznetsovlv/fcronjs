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
