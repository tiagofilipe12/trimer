# trimer

Removes all characters from the left and right end of a string given an array
of characters or a string with one character only.

[![Build Status](https://travis-ci.org/tiagofilipe12/trimer.svg?branch=master)](https://travis-ci.org/tiagofilipe12/trimer)
[![codecov](https://codecov.io/gh/tiagofilipe12/trimer/branch/master/graph/badge.svg)](https://codecov.io/gh/tiagofilipe12/trimer)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8f2c9136fac143819d16daaa41af8413)](https://www.codacy.com/app/tiagofilipe12/trimer?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=tiagofilipe12/trimer&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/trimer.svg)](https://badge.fury.io/js/trimer)

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
