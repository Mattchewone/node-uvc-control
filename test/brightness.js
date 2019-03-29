#!/usr/bin/env node

const UVCControl = require('../index')

var cam = new UVCControl({
  vid: 1133,
  pid: 2140
})

cam.set('brightness', 105, function (err, resp) {
  if (err) {
    console.error('failed to set brightness', err)
  } else {
    console.log('set brightness', resp)
  }
})
