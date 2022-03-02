// Mappt den Grafikpfad G:\\VPMS\\01-Grafik\\ auf \\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-01-Grafik\\, und G:\VPMS\14-MoJo auf \\\\sb-fbp-ist01.ad.rbb-online.de\\Transfer\\MoJo\\ wenn ein Asset in die Timeline gezogen wird


app.bind("onActiveSequenceTrackItemAdded", onTrackItemAdded)


function onTrackItemAdded(track, trackItem) {
    var newItemName = trackItem.name
    var activeSequence = app.project.activeSequence
    var videoTracks = activeSequence.videoTracks
    getPath(videoTracks, newItemName)
  
}


function getPath(videoTracks, newItemName) {
    var graphicAndMojoPathSwap = [['G:\\VPMS\\01-Grafik\\','\\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-01-Grafik\\' ],['G:\\VPMS\\14-MoJo\\', '\\\\sb-fbp-ist01.ad.rbb-online.de\\Transfer\\MoJo\\' ]]
    for (var i=0; i < videoTracks.numTracks; i++) {
        var clipsOfSingleTrack = videoTracks[i].clips     
        for (var j=0; j < clipsOfSingleTrack.numItems; j++) {
            if (clipsOfSingleTrack[j].projectItem.name == newItemName) {
                var singleItemMediaPath = clipsOfSingleTrack[j].projectItem.getMediaPath()
                var newPath = singleItemMediaPath
                for (var k=0; k < graphicAndMojoPathSwap.length; k++) {
                    newPath = newPath.split(graphicAndMojoPathSwap[k][0]).join(graphicAndMojoPathSwap[k][1])
                    clipsOfSingleTrack[j].projectItem.changeMediaPath(newPath, true)
                }
            }
        }
    }
}
