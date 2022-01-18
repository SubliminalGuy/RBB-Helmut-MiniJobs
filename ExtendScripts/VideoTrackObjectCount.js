
pathToCheck = "\\\\sp-fbpkons-istb01\\Transfer\\CNC\\Helmut\\Helmut4"
arrClipPaths = []
CheckPathOfTimelineClips(app.project.activeSequence)

// var newFile("\\test\test\\")

// $.writeln(app.project.rootItem.findItemsMatchingMediaPath("\\\\sp-fbpkons-istb01\\Transfer\\CNC\\Helmut\\Helmut4"))

function CheckPathOfTimelineClips(activeSequence) {
    if (activeSequence) {
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


    else ($.writeln("keine aktive Sequenz vorhanden"))
}
function checkPath(CLIP) {
    for (var i = 0; i < CLIP.numTracks; i++) {
        var track = CLIP[i]
        var TrackClips = track.clips
        var Anzclips = TrackClips.numItems
        for (var j = 0; j < TrackClips.numItems; j++) {
            var TrackClip = TrackClips[j]
            if (!TrackClip.disabled) {
                var PrItem = TrackClip.projectItem
                if (PrItem && PrItem.type == ProjectItemType.CLIP) {
                    //$.writeln(PrItem.name)
                    var clipPath = PrItem.getMediaPath()
                    var clipPathIndex = clipPath.indexOf(pathToCheck) // wenn der Pfad nicht dem pathToCheck enspricht wird -1 ausgegeben

                    if (clipPathIndex == -1) { //überprüft ob der Clip Pfad bereits im Array vorhanden ist, falls nicht wird er ans Ende gepusht     
                        for (var k = 0; k < arrClipPaths.length; k++) {
                            var arrCHECK
                            if (arrClipPaths[k] == clipPath) { arrCHECK = true; break }
                            else (arrCHECK = false)
                        }
                        if (!arrCHECK) { (arrClipPaths.push(clipPath)) }
                    }
                }
            }
        }
    }
}
function ReturnClipPaths() {
    if (arrClipPaths.length > 0) {
        $.writeln("Folgende Clips müssen auf den zentralen Speicher kopiert werden: ")
        for (var k = 0; k < arrClipPaths.length; k++) {
            $.writeln(arrClipPaths[k])
        }
        var PathObj ={}
        PathObj.Anzahl = arrClipPaths.length
        PathObj.Pfade = arrClipPaths
        PathObj.lastPath = "0"
        PathObjString = JSON.stringify(PathObj)
        PathObjString = PathObjString.replace(/\\\\/g,"/")
        $.writeln(PathObjString)
        return PathObjString
    }

}