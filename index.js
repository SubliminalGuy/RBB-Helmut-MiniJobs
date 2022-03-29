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

var themeObject = {
  "01.01.2000": [["Sonstiges", "0000"]],
  "22.02.2022": [
    ["Masterprojekt_Berlin_22_Feb", "6214ec06fbccaa00011b1ce9"],
    ["Masterprojekt_Berlin_2_22_Feb", "6214ed31fbccaa00011b1ceb"],
    ["Masterprojekt_Berlin_3_22_Feb", "6214f168fbccaa00011b1ced"],
    ["Masterprojekt_Berlin_5_22_Feb", "62150a66fbccaa00011b1cf4"],
  ],
  "23.02.2022": [["Storchwetter_Master_23_Feb", "621613dbfbccaa00011b1cf8"]],
};

var newDate = "22.02.2022";



var masterprojektArray = themeObject[newDate]

var masterprojektIdArray = []

for (var i =0; i<masterprojektArray.length; i++) {
  masterprojektIdArray.push(masterprojektArray[i][1])
}


var Wort = "fdhfkldshgjkdhdgjkshjkgshjkghdjkdghjkghsdjkhgjhsgkdjhjgdkshkjghjkgsdhjkgdhjkgdhgjkdhkjgdshkgdjkgdhjkdgshjkgdshgdhk"


if (Wort.length > 25) {
  Wort = Wort.substring(0, 24) + "...";
}

console.log(Wort)