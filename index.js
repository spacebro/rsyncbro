const SpacebroClient = require('spacebro-client').SpacebroClient
var standardSettings = require('standard-settings')
const assignment = require('assignment')
const settings = standardSettings.getSettings()
var Rsync = require('rsync')

var spacebroClient = new SpacebroClient()

spacebroClient.on(settings.service.spacebro.client.in.inMedia.eventName, media => {
  media = assignment(JSON.parse(JSON.stringify(settings.media)), media)
  spacebroClient.emit(settings.service.spacebro.client.out.outMedia.eventName, media)
  console.log('File ' + media.path + ' received')
  if (media.path) {
    var rsync = new Rsync()
      .shell('ssh')
      .flags('Paur')
      .source(media.path)
      .destination(settings.destination + ':' + media.path)
    console.log('Sending to ' + settings.destination + ':' + media.path)

    // execute with stream callbacks
    rsyncPid = rsync.execute(
      function (error, code, cmd) {
        // we're done
        console.log('File ' + media.path + ' has been sent')
        console.log('err:' + error)
        console.log('code:' + code)
      }, function (data) {
      data = data.toString('utf-8')
      console.log('File ' + media.path + ' progress')
      console.log(data)
        // do things like parse progress
    }, function (data) {
      data = data.toString('utf-8')
      console.log('File ' + media.path + ' error')
      console.log(data)
        // do things like parse error output
    }
    )
  }
})

var quitting = function () {
  if (rsyncPid) {
    rsyncPid.kill()
  }
  process.exit()
}
process.on('SIGINT', quitting) // run signal handler on CTRL-C
process.on('SIGTERM', quitting) // run signal handler on SIGTERM
process.on('exit', quitting) // run signal handler when main process exits

var rsyncPid
