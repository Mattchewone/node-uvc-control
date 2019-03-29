#!/usr/bin/env node

const UVCControl = require('../index')
console.log(UVCControl)
UVCControl.discover().then(results => {
  console.log(results)
})
