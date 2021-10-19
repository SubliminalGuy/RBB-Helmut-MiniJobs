const change = require('./findAndUpdate.js')
const changeSetting = require('./changePremiereSettings.js')
const swapObject = require('./swapObject.js')
const changeDate = require('./changeDate.js')
const metaDataChange = require('./metaDataChange.js')
const amplifier = require("./OMIDamplifier.js")
const fastLaneMapper = require("./changeFastlaneTarget.js")
const changeSequenceName = require("./changeSeqName.js")

var sendungsKuerzel = require('./sendungskuerzel')
var mediaJSON = require('./job')


//console.log(swapObject(sendungsKuerzel))

//console.log(mediaJSON.metadata)

//var datum = "31-01-2001 14:00"
console.log(changeSequenceName())


