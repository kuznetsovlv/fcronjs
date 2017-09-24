# fcronjs

Package for manage function call timetable.

## WARNING:
**Since version 2.0.1 the contract for debounce and throttle methods has been changed. New contract is compatible for old throttle's contract but incompatible for debounce's contract in previous versions.**

## [Content](#user-content-content "Conten")
- [GitHub.](#user-content-github "Link to GitHub repository")
- [Install.](#user-content-install "Install")
- [Usage.](#user-content-usege "Usage")
  - [debounce](#user-content-debounce "debounce")
  - [throttle](#user-content-throttle "throttle")
- [Support.](#user-content-support "Supported brousers")
- [License](#user-content-license "License")

## GitHub.
[Progect on GitHub.](https://github.com/kuznetsovlv/fcronjs "Link to GitHub repository")

## Install.
```bash
npm install fcronjs --save
```

## Usage.
Import `fcronjs` form package:
```javascript
  import fcronjs from 'fcronjs';
```
or add script _fcron.js_ from _web/fcron.js_ in branch _master_ and add itinto your _HTML_:

```html
  <script src="./fcron.js"></script>
```

and use:

### debounce
```javascript
  import { debounce } from 'fcronjs';
``` 

or

```javascript
  var debounce = fcronjs.debounce;
```

Method debounce creates Hi Ordered Function which sets minimal period between calls. It has two arguments:

  * {Function} func - original function.
  * {Object|number} [secondArgument] - in case Object - configurin object, in other case - [config#delay = 100].

    Configuring object has 3 parameters:
    * {number} [config#delay = 100] - minimal number of milliseconds to be waited between calls.
    * {boolean} [config#immediate = false] - when immediate = true function calls immediatly if it is possible, in other case it cals after delay ms.
    * {Object} [config#context] - context object of function. If context was set it can not be changed or removed.

For examlpe:
```javascript
  import { debounce } from 'fcronjs';

  const f = debounce(console.log, {delay: 1000, immediate: false, context: console});

  const timeouts = [0, 10, 100, 1000, 1010, 2000, 3000, 3500, 3550, 4200];

  timeouts.forEach(x => setTimeout(f, x, x));
```

In output very likely will be `0`, `1010`, `3000`, and `4200`. And `10`, `100`, `1000`, `2000`, `3500` likely to be ignored.

### throttle
```javascript
  import { throttle } from 'fcronjs';
```

or

```javascript
  var throttle = fcronjs.throttle;
```

Method debounce creates Hi Ordered Function which sets minimal period between calls and execute last call every time at the end.

* {Function} func - original function.
* {Object|number} [secondArgument] - in case Object - configurin object, in other case - [config#delay = 100].

    Configuring object has 3 parameters:
    * {number} [config#delay = 100] - minimal number of milliseconds to be waited between calls.
    * {boolean} [config#immediate = false] - when immediate = true function calls immediatly if it is possible, in other case it cals after delay ms.

For examlpe:
```javascript
  import { throttle } from 'fcronjs';

  const f = throttle(console.log, 1000);

  const timeouts = [0, 10, 100, 1000, 1010, 2000, 3000, 3500, 3550, 10000, 10001];

  timeouts.forEach(x => setTimeout(f, x, x));
```

In output very likely will be `0`, `1000`, `1010` (as a last), `2000`, `3000`, and `3550` (as a last), `10000`, and `10001` (as a last). And `10`, `100`, `3500` likely to be ignored.


## Support.
Supported browsers _IE9+_.


## License
[MIT](./LICENSE "MIT") Copyright (c) 2017 Kuznetsov Leonid.