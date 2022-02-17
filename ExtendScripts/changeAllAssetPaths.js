// aendert die Pfade des G-Laufwerks der Unterordner Grafik, Mojo und Ingest


var activeSequence = app.project.activeSequence
var videoTracks = activeSequence.videoTracks
var audioTracks = activeSequence.audioTracks 

var ingestPfad = '\\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-08-Ingest\\'
var grafikPfad = '\\\\Sp-isis01.ad.rbb-online.de\\data101$\\common\\088-01-Grafik\\'
var mojoPfad = '\\\\sb-fbp-ist01.ad.rbb-online.de\\Transfer\\MoJo\\'
//var videoPfad = '\\\\sb-fbp-ist01.ad.rbb-online.de\\OU2_File_Download\\'


var ersatzArray = [['G:\\VPMS\\08-Ingest\\', ingestPfad],['G:\\VPMS\\01-Grafik\\', grafikPfad], ['G:\\VPMS\\14-MoJo\\', mojoPfad]]




getPath(videoTracks)
getPath(audioTracks)



function getPath(videoTracks) {
  // $.writeln(videoTracks[0].clips)
    for (var i=0; i < videoTracks.numTracks; i++) {
        var clipsOfSingleTrack = videoTracks[i].clips
        
        for (var j=0; j < clipsOfSingleTrack.numItems; j++) {
            var singleItemMediaPath = clipsOfSingleTrack[j].projectItem.getMediaPath()
            $.writeln("Erster Pfad ", singleItemMediaPath)
            var newPath = singleItemMediaPath
            
            for (var k=0; k < ersatzArray.length; k++) {
                newPath = newPath.split(ersatzArray[k][0]).join(ersatzArray[k][1])
                $.writeln("Neuer Pfad in der Theorie ", newPath)
                clipsOfSingleTrack[j].projectItem.changeMediaPath(newPath, true)
            
            $.writeln("Neuer Pfad ", singleItemMediaPath)
            }
        }
        
    }

}