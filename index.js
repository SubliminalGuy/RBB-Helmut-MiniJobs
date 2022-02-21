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

var datum = "19.02.2022"

function getDateSuffix() {

    var dateArray = datum.split(".")
    var neuesDatum = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0]
    console.log("Neues Datum", neuesDatum)
    var realDate = new Date(neuesDatum)
    var monthShort = realDate.toLocaleString('de-DE', { month: 'short' })
    var test = realDate.getDate() + "-" + monthShort
    console.log(test)
}

getDateSuffix()