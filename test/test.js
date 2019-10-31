'use strict'
const spaceBro = require('spacebro-client')
var settings = require('standard-settings').getSettings()

spaceBro.connect(settings.service.spacebro.host, settings.service.spacebro.port, {
  client: {
    name: settings.service.spacebro.client.name + '-test'
  },
  channelName: settings.service.spacebro.channelName,
  verbose: false,
  sendBack: false
})
console.log('Connecting to spacebro on ' + settings.service.spacebro.host + ':' + settings.service.spacebro.port)

spaceBro.on(settings.service.spacebro.client.out.outMedia.eventName, function (data) {
  console.log('media is ready: ' + JSON.stringify(data, null, 2))
})

setTimeout(function () {
  spaceBro.emit(settings.service.spacebro.client['in'].inMedia.eventName, {
    url: 'http://www.ee.cityu.edu.hk/~lmpo/lenna/len_full.jpg',
    meta: {
      theme: 'socialite-banana-party'
    }
  })
  console.log('emit ')
}, 1000)
