//Cheat Sheet RBB

//Variablen

//Ohne 'var' global, mit 'var' nur in meiner aktuellen function
testVariable1 = 1
var testVariable2 = "string"
var testVariable3 = true
var testVariable4 = []


//Einfache Mathematische Operationen
var test = 1 + 4
var test1 = 1 + testVariable1

//um 1 hochzählen
var test++
var test += 1
var test = test + 1

//um 1 herunterzählen
var test--
var test -= 1
var test = test - 1

var testVariable1 = 1
//Logische Operatoren
var istEine1 = testVariable1 == 1
//mit '===' wird zusätzlich noch überprüft ob die beiden Werte den gleichen Type haben. Nachfolgendes Beispiel ergibt demnach false
var istEine1 = testVariable1 === "1"
var variableGroesser1 = testVariable1 > 1
var variableGroesserGleich1 = testVariable1 >= 1
var variableKleiner1 = testVariable1 < 1
var variableKleiner = testVariable1 <= 1
var variableUngleich1 = testVariable1 != 1
var dasGegenteilDerVariable = !istEine1


//Kontrollstruktur if/else if/else
if (istEine1) {

} else if (!istEine1) {

} else {

}

//Kontrollstruktur for-Schleife oder Zählschleife
for (var index = 0; index < 1000; index++) {

}

//Beispiel: Schleife nutzen um über alle VideoTracks einer Sequenz durchzugehen

var meinProjekt = app.project;
var meineAktiveSequenz = meinProjekt.activeSequence;
var videoTracksMeinerAktivenSequenz = meineAktiveSequenz.videoTracks;

for (var i = 0; i < videoTracksMeinerAktivenSequenz.length; i++) {
    var aktuellerVideoTrack = videoTracksMeinerAktivenSequenz[i];
}

//Funktion definieren
function testFunction(parameter1, parameter2) {
    var parameter1PlusParameter2 = parameter1 + parameter2;
    return parameter1PlusParameter2;

}
//Funktion auufrufen
var ergebnisDerFunktion = testFunction(1, 2)
//Ergebnis ist hier 3



//Metadaten im Projekt Ändern:

function loadXMPLibrary() {
    try {
        if (ExternalObject.AdobeXMPScript == undefined) {
            ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
        }
    } catch (e) {
        return false;
    }
    return true;
}
loadXMPLibrary();


setMetadataOnFile(app.project.rootItem.children[2], "tapeName", "rbb", XMPConst.NS_DM)

function setMetadataOnFile(projectItem, key, value, ns) {
    var xmpObj = new XMPMeta(projectItem.getXMPMetadata());
    xmpObj.setProperty(ns, key, value);
    projectItem.setXMPMetadata(xmpObj.serialize());
}

setMetadataOnClip(app.project.rootItem.children[2], "rbb test", "rbb")

function setMetadataOnClip(projectItem, label, value) {
    var ns = "http://ns.adobe.com/premierePrivateProjectMetaData/1.0/";
    var xmpObj = new XMPMeta(projectItem.getProjectMetadata());
    var key = label.replace(/ /g, "");
    app.project.addPropertyToProjectMetadataSchema(key, label, 2);
    xmpObj.setProperty(ns, key, value);
    projectItem.setProjectMetadata(xmpObj.serialize(), [key]);
}

//Events

app.onItemAddedToProjectSuccess = functionDieAufgerufenWirdWennEinNeuesElementDemProjectHinzugefuegtWird;

function functionDieAufgerufenWirdWennEinNeuesElementDemProjectHinzugefuegtWird(whichProject, addedProjectItem) {
    app.setSDKEventMessage(addedProjectItem.getMediaPath(), 'info');

}

app.bind('onProjectChanged', functionDieAufgerufenWirdWennDasProjectSichAendert);

function functionDieAufgerufenWirdWennDasProjectSichAendert(documentID) {

    app.setSDKEventMessage(documentID, 'info');

}

//Premiere Pro Scripting Dokumentation:
//https://ppro-scripting.docsforadobe.dev/
// 
