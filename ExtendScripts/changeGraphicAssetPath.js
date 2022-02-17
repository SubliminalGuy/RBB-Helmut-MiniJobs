// aendert die Pfade des G-Laufwerks des Unterordners Grafik


var activeSequence = app.project.activeSequence
var videoTracks = activeSequence.videoTracks
var audioTracks = activeSequence.audioTracks 
var graphicPathSwap = ['G:\\VPMS\\01-Grafik\\','\\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-01-Grafik\\' ]

getPath(videoTracks)
getPath(audioTracks)


function getPath(videoTracks) {
  // $.writeln(videoTracks[0].clips)
    for (var i=0; i < videoTracks.numTracks; i++) {
        var clipsOfSingleTrack = videoTracks[i].clips
        
        for (var j=0; j < clipsOfSingleTrack.numItems; j++) {
            var singleItemMediaPath = clipsOfSingleTrack[j].projectItem.getMediaPath()
            //$.writeln("Erster Pfad ", singleItemMediaPath)
            var newPath = singleItemMediaPath
            newPath = newPath.split(graphicPathSwap[0]).join(graphicPathSwap[1])
            clipsOfSingleTrack[j].projectItem.changeMediaPath(newPath, true)
            //$.writeln("Neuer Pfad ", singleItemMediaPath)
        }
    }
}