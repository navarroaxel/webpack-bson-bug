# webpack-bson-bug

This repo exists to show a bson bug using destructing import at `bson@3.0.1`

## Related issues

 https://github.com/mongodb/js-bson/issues/263

## Reproducing the bug
1. After clone this repo you should run the following commands:

```bash
npm install
npm test
```

You should read this message in the console output:

```
A valid ObjectID: 5b48f2201c9d440000a7a5aa
```

2. Now upgrade to `bson@3.0.1`

```bash
npm install bson@3.0.1
npm test
```

And you can see the following error in the console output:

```
TypeError: Object(...) is not a function ...
```

3. You can change the file `index.js`

```diff
- import generateId from './generateId';
+ import generateId from './generateId301';
```

and running `npm test` the program works perfectly like step 1
