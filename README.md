# fcronjs

Package for manage function call timetable.

## [Content](#user-content-content "Conten")
- [GitHub.](#user-content-github "Link to GitHub repository")
- [Install.](#user-content-install "Install")
- [Usage.](#user-content-usege "Usage")
  - [debounce](#user-content-debounce "debounce")
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
or add script fcron.js_ from _web/fcron.js_ in branch _master_ and add itinto your _HTML_:

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
  * {Object} [config = {}] - configurin object. You can configure next properies: 
    * {number} [wait = 100] - minimal number of milliseconds to be waited between calls.
    * {boolean} [immediate = false] - when immediate = true function calls immediatly if it is possible, in other case it cals after wait ms.
    * {Object} [context] - context object of function. If context was set it can not be changed or removed.

For examlpe:
```javascript
  import { debounce } from 'fcronjs';

  const f = debounce(console.log, 1000, false, console);

  const timeouts = [0, 10, 100, 1000, 1010, 2000, 3000, 3500, 3550, 4200];

  timeouts.forEach(x => setTimeout(f, x, x));
```

In output very likely will be `0`, `1000`, `2000`, `3000`, and `4200`. And `10`, `100`, `1010`, `3500` likely to be ignored. 

## Support.
Supported browsers _IE9+_.

## License
[MIT](./LICENSE "MIT") Copyright (c) 2017 Kuznetsov Leonid.