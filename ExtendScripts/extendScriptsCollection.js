function loadJson() {
    if (typeof JSON !== "object") { JSON = {} } (function () { "use strict"; function f(e) { return e < 10 ? "0" + e : e } function quote(e) { escapable.lastIndex = 0; return escapable.test(e) ? '"' + e.replace(escapable, function (e) { var t = meta[e]; return typeof t === "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + e + '"' } function str(e, t) { var n, r, i, s, o = gap, u, a = t[e]; if (a && typeof a === "object" && typeof a.toJSON === "function") { a = a.toJSON(e) } if (typeof rep === "function") { a = rep.call(t, e, a) } switch (typeof a) { case "string": return quote(a); case "number": return isFinite(a) ? String(a) : "null"; case "boolean": case "null": return String(a); case "object": if (!a) { return "null" } gap += indent; u = []; if (Object.prototype.toString.apply(a) === "[object Array]") { s = a.length; for (n = 0; n < s; n += 1) { u[n] = str(n, a) || "null" } i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]"; gap = o; return i } if (rep && typeof rep === "object") { s = rep.length; for (n = 0; n < s; n += 1) { if (typeof rep[n] === "string") { r = rep[n]; i = str(r, a); if (i) { u.push(quote(r) + (gap ? ": " : ":") + i) } } } } else { for (r in a) { if (Object.prototype.hasOwnProperty.call(a, r)) { i = str(r, a); if (i) { u.push(quote(r) + (gap ? ": " : ":") + i) } } } } i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}"; gap = o; return i } } if (typeof Date.prototype.toJSON !== "function") { Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }; String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () { return this.valueOf() } } var cx, escapable, gap, indent, meta, rep; if (typeof JSON.stringify !== "function") { escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g; meta = { "\b": "\\b", "": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }; JSON.stringify = function (e, t, n) { var r; gap = ""; indent = ""; if (typeof n === "number") { for (r = 0; r < n; r += 1) { indent += " " } } else if (typeof n === "string") { indent = n } rep = t; if (t && typeof t !== "function" && (typeof t !== "object" || typeof t.length !== "number")) { throw new Error("JSON.stringify") } return str("", { "": e }) } } if (typeof JSON.parse !== "function") { cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g; JSON.parse = function (text, reviver) { function walk(e, t) { var n, r, i = e[t]; if (i && typeof i === "object") { for (n in i) { if (Object.prototype.hasOwnProperty.call(i, n)) { r = walk(i, n); if (r !== undefined) { i[n] = r } else { delete i[n] } } } } return reviver.call(e, t, i) } var j; text = String(text); cx.lastIndex = 0; if (cx.test(text)) { text = text.replace(cx, function (e) { return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) }) } if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) { j = eval("(" + text + ")"); return typeof reviver === "function" ? walk({ "": j }, "") : j } throw new SyntaxError("JSON.parse") } } })()
}

loadJson();

// NEUES SCRIPT: Ändere die Namen der Vorlagensequenzen mit dem Projektnamen

var anzahlSequenzen = app.project.sequences.numSequences

function myIndexOf(array, x){
	var n=-1, N=array.length;
	while (++n<N && array[n]!==x);
	return n<N ? n : -1;
	};

function changeSeqNames(projectName) {
    for (i=0; i < anzahlSequenzen; i++) {
    seqName = app.project.sequences[i].name
        partikelArray = seqName.split(" ")
        var xIndex = myIndexOf(partikelArray, ("xxxx_xx_xx"))
        if (xIndex > -1) {
            partikelArray[xIndex] = projectName
        }
        seqName = partikelArray.join(" ")
    app.project.sequences[i].name = seqName
    }
return seqName
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// NEUES SCRIPT: Mappt den Grafikpfad G:\\VPMS\\01-Grafik\\ auf \\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-01-Grafik\\, und G:\VPMS\14-MoJo auf \\\\sb-fbp-ist01.ad.rbb-online.de\\Transfer\\MoJo\\ wenn ein Asset in die Timeline gezogen wird


app.bind("onActiveSequenceTrackItemAdded", onTrackItemAdded)


function onTrackItemAdded(track, trackItem) {
   replaceMediaPath(trackItem)
}


function replaceMediaPath(trackItem) {
    var graphicAndMojoPathSwap = [['G:\\VPMS\\01-Grafik\\','\\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-01-Grafik\\' ],['G:\\VPMS\\14-MoJo\\', '\\\\sb-fbp-ist01.ad.rbb-online.de\\Transfer\\MoJo\\' ]]
    
    var newPath = trackItem.projectItem.getMediaPath()
    for (var k=0; k < graphicAndMojoPathSwap.length; k++) {
        newPath = newPath.split(graphicAndMojoPathSwap[k][0]).join(graphicAndMojoPathSwap[k][1])
        trackItem.projectItem.changeMediaPath(newPath, true)
    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// NEUES SCRIPT: Das folgende Script gibt ein Array aus, mit allen Assets die nicht in den Transfer Ordnern Helmut, dem VPMS Share, im Grafik- oder Mojo-Ordner liegen



var pathToCheck = "\\\\sb-fbp-ist01\\Transfer\\CNC\\Helmut\\Helmut4"
var path2ToCheck = "\\\\sb-fbp-ist01\\VPMS\\Ingest\\IN_MaterialPool"
var path3ToCheck = "\\\\sp-fbp-ist01\\VPMS\\Ingest\\IN_MaterialPool"
var path4ToCheck = "\\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-01-Grafik"
var path5ToCheck = "\\\\sb-fbp-ist01.ad.rbb-online.de\\Transfer\\MoJo"

arrClipPaths = []
arrClipNames = []
CheckPathOfTimelineClips(app.project.activeSequence)

JSON.stringify(CheckPathOfTimelineClips(app.project.activeSequence))

function CheckPathOfTimelineClips(mysequence) {
    if (mysequence) {
        activeSequence = app.project.activeSequence
        videoTracks = activeSequence.videoTracks
        audioTracks = activeSequence.audioTracks
        nameSeq = activeSequence.name
        allSeq = app.project.sequences
        var clipType = videoTracks
        checkPath(clipType);            //checkt alle Clips auf den vorhandenen VIDEOtracks und schreibt fehlende Clips ins Array arrClipPaths

        clipType = audioTracks;
        checkPath(clipType)             //checkt alle Clips auf den vorhandenen AUDIOtracks und schreibt fehlende Clips ins Array arrClipPaths

        ReturnClipPaths();              //gibt alle Elemente des Arrays arrClipPaths aus
        return PathObjString
    }


    else {
        return {"message":"Keine aktive Sequenz vorhanden"}
    }
}


function checkPath(CLIP) {
    for (var i = 0; i < CLIP.numTracks; i++) {
        var track = CLIP[i]
        var TrackClips = track.clips
        //var Anzclips = TrackClips.numItems
        for (var j = 0; j < TrackClips.numItems; j++) {
            var TrackClip = TrackClips[j]
            if (!TrackClip.disabled) {
                var PrItem = TrackClip.projectItem
                if (PrItem && PrItem.type == ProjectItemType.CLIP) {
                    //$.writeln(PrItem.name)
                    var clipPath = PrItem.getMediaPath()
                    var clipName = PrItem.name
                    var clipPathIndex = clipPath.indexOf(pathToCheck) // wenn der Pfad nicht dem pathToCheck enspricht wird -1 ausgegeben
                    var clipPath2Index = clipPath.indexOf(path2ToCheck)
                    var clipPath3Index = clipPath.indexOf(path3ToCheck)
                    var clipPath4Index = clipPath.indexOf(path4ToCheck)
                    var clipPath5Index = clipPath.indexOf(path5ToCheck)

                    if (clipPathIndex == -1 && clipPath2Index == -1 && clipPath3Index == -1 && clipPath4Index == -1  && clipPath5Index == -1) { //überprüft ob der Clip Pfad bereits im Array vorhanden ist, falls nicht wird er ans Ende gepusht     
                        for (var k = 0; k < arrClipPaths.length; k++) {
                            var arrCHECK
                            if (arrClipPaths[k] == clipPath) { arrCHECK = true; break }
                            else (arrCHECK = false)
                        }
                        if (!arrCHECK) { 
                            (arrClipPaths.push(clipPath));
                            (arrClipNames.push(clipName))
                        }
                    }
                }
            }
        }
    }
}
function ReturnClipPaths() {
    var PathObj ={}
    if (arrClipPaths.length > 0) {
        
        PathObj.Anzahl = arrClipPaths.length
        PathObj.Pfade = arrClipPaths
        PathObj.Names = arrClipNames
        PathObj.lastPath = "0"
    }
        
    else {
        PathObj.Anzahl = 0 
    }
        PathObjString = JSON.stringify(PathObj)
        PathObjString = PathObjString.replace(/\\\\/g,"/")
        return PathObjString
    }


/*
Wir suchen uns aus den im Projekt verwendeten Sequenzen die Sequenz heraus die wir exportiert haben. 
Sobald wie diese kennen, fragen wir die frameSizeVertical und frameSizeHorizontal ab und schicken diese weiter an die nächste Node.
*/



var projektSequenzen = app.project.sequences

var anzahlSequenzen = app.project.sequences.numSequences

function FrameSize(nodeId){
    var eachID
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