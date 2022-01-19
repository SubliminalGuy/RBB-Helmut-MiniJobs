// Events


app.onItemAddedToProjectSuccess = function (whichProject, addedProjectItem) {
    alert(addedProjectItem.getMediaPath().toString())
}


app.bind("onProjectChanged", carl)

function carl(documentID) {
    app.setSDKEventMessage(documentID, 'info');
}


app.bind("onActiveSequenceChanged", onActiveSequenceChanged)


var messageArray = ["Bist du wirklich ein Cutter?", "Haesslicher Schnitt!", "Naja", "Versuch es noch einmal", "Termin beim Chef", "Feld-Wald-und-Wiesen-Cutter!", "Ooch noe!"]

function onActiveSequenceChanged() {
    var randomNumber =  Math.round(Math.random() * messageArray.length)
    var message = messageArray[randomNumber]
    alert(message)
    //app.setSDKEventMessage("active sequence changed", "info")

}