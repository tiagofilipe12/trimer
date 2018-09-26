# trimer

Removes all characters from the left and right end of a string given an array
of characters or a string with one character only.

## Install

```
npm install trimer
```

## Usage

### With arrays
```js
const trimer = require('trimer')

trimer("  bbbbbtest ////aaaaa", ["/", " ", "a", "b"])
// 'test'
```

### With strings
```js
const trimer = require('trimer')

trimer("/test////", "/")
// 'test'
```
