// Mappt den Grafikpfad G:\\VPMS\\01-Grafik\\ auf \\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-01-Grafik\\, und G:\VPMS\14-MoJo auf \\\\sb-fbp-ist01.ad.rbb-online.de\\Transfer\\MoJo\\ wenn ein Asset in die Timeline gezogen wird


app.bind("onActiveSequenceTrackItemAdded", onTrackItemAdded)


function onTrackItemAdded(track, trackItem) {
    replaceMediaPath(trackItem)
}


function replaceMediaPath(trackItem) {
    var graphicMojoAndIngestPathSwap = [['G:\\VPMS\\01-Grafik\\','\\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-01-Grafik\\' ],['G:\\VPMS\\14-MoJo\\', '\\\\sb-fbp-ist01.ad.rbb-online.de\\Transfer\\MoJo\\' ], ['G:\\VPMS\\08-Ingest\\','\\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-08-Ingest\\']]
    
    var newPath = trackItem.projectItem.getMediaPath()
    for (var k=0; k < graphicMojoAndIngestPathSwap.length; k++) {
        newPath = newPath.split(graphicMojoAndIngestPathSwap[k][0]).join(graphicMojoAndIngestPathSwap[k][1])
        trackItem.projectItem.changeMediaPath(newPath, true)
    }
}