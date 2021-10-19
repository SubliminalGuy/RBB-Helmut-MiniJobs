var project = app.project

var someID = "grmblfrz89"

var sequence = project.createNewSequence("My new sequence", someID)

// Create Sequence from some clips
var sequenceTwo = project.createNewSequenceFromClips("Clip Sequence", [],project.rootItem)

// How to get all Sequences from Project
var sequences = project.sequences;

alert(sequences.length.toString())

// Inserting a designated Videofile to the Sequence @ 2 seconds
var time = new Time();
time.seconds = 2;

sequenceTwo.videoTracks[1].insertClip(app.project.rootItem.children[0], time);

// And Overwriting

sequenceTwo.videoTracks[1].overwriteClip(app.project.rootItem.children[0], time);

// Access and Manage Clips

for (var c = 0; c < app.project.activeSequence.videoTracks[1].clips.length; c++) {
    alert(app.project.activeSequence.videoTracks[1].clips[c].name)
}


