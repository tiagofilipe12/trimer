# trimer

Removes all characters from the left and right end of a string given an array
of characters or a string with one character only.

[![Build Status](https://travis-ci.org/tiagofilipe12/trimer.svg?branch=master)](https://travis-ci.org/tiagofilipe12/trimer)
[![codecov](https://codecov.io/gh/tiagofilipe12/trimer/branch/master/graph/badge.svg)](https://codecov.io/gh/tiagofilipe12/trimer)


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
