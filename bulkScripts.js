//SicherungsKopien der Skripte aus Helmut

/*

// Find and Export Resolution (VPMS Export Prod)

var nodeId = "{node.result.d2fcdc61-02d5-4ffe-be33-d36d8efb62c8}"
var alleNamen = nodeId
var gefundenenSequenz = ""
var projektSequenzen = app.project.sequences
var eachID
var anzahlSequenzen = app.project.sequences.numSequences

function FrameSize(){
for (i=0; i < anzahlSequenzen; i++){
eachID = projektSequenzen[i].sequenceID
eachID = eachID.toString()
if (eachID === nodeId) {
var verticalSize = app.project.sequences[i].frameSizeVertical
verticalSize = verticalSize.toString()
var horizontalSize = app.project.sequences[i].frameSizeHorizontal
horizontalSize = horizontalSize.toString()
 return horizontalSize + "X" + verticalSize
}
}

}
  
// Change Sequences Names (ExtendScript Seq umbenennen)

var anzahlSequenzen = app.project.sequences.numSequences
var partikelArray = []
function changeSeqNames() {
 for (i=0; i < anzahlSequenzen; i++) {
seqName = app.project.sequences[i].name
    partikelArray = seqName.split(" ")
   var xIndex = partikelArray.indexOf("xxxx_xx_xx")
if (xIndex > -1) {
   partikelArray[xIndex] = "{project.name}"
}
    seqName = partikelArray.join(" ")
app.project.sequences[i].name = seqName
}
return seqName
}

// Date Changer Sendedatum (26 AEM Render und CheckIn)

var onAirDate = "{job.metadata.Sendedatum}";

function dateChange() {
var newDate;
if (onAirDate.length <17 && onAirDate.length  != 0) {
dateArray = onAirDate.split(" ")
var datumArray = dateArray[0].split("-")
datumArray.reverse()
dateArray[0] = datumArray.join(".")
dateArray[1] = dateArray[1].concat(":00")
newDate = dateArray.join(" ")
}
else {
newDate = "{date.day}.{date.month}.{date.year} {time.hour}:{time.minute}:{time.second}"
}
return newDate
}


// Date Changer Aufschaltdatum

var publishDate = "{job.metadata.Aufschaltdatum}"


function dateChange() {
var newDate;
if (publishDate.length == 16) {
dateArray = publishDate.split(" ")
var datumArray = dateArray[0].split("-")
datumArray.reverse()
dateArray[0] = datumArray.join(".")
dateArray[1] = dateArray[1].concat(":00")
newDate = dateArray.join(" ")
}
else {
newDate = ""
}
return newDate
}


// Date Changer Abschaltdatum

var unpublishDate = "{job.metadata.Abschaltdatum}"


function dateChange() {
var newDate;
if (unpublishDate.length == 16) {
dateArray = unpublishDate.split(" ")
var datumArray = dateArray[0].split("-")
datumArray.reverse()
dateArray[0] = datumArray.join(".")
dateArray[1] = dateArray[1].concat(":00")
newDate = dateArray.join(" ")
}
else {
newDate = ""
}
return newDate
}

// Ändere VERWENDUNGSBE von true/false auf Ja/nein (19 VPMS Render und CheckIn Prod)

var usable = {job.metadata.VERWENDUNGSBE}
var conditionNumber 
function changeState() {
 if (usable) {
conditionNumber = "Ja"
}
else {
conditionNumber = "Nein"
}
return conditionNumber
}

// 24 Workspaces einpflegen

var oldConfig = {node.result.a49217fc-976a-4400-91cf-b0ab07fcb1c0}

function reWrap() {
oldConfig.hidden = ["Farbe","Bibliotheken","Grafiken","Audio","Effekte"]

oldConfig.overflow = ["Alle Fenster","Zusammenstellung","Metaprotokollierung","Bearbeitung","Training","Produktion"]

oldConfig.shown = ["01 J-Schnitt","02 J-Import_Export","03 J-Audio","04 C-Schnitt","05 C-Audio","06 C-Farbe"]

return JSON.stringify(oldConfig)
}