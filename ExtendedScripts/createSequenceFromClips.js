var project = app.project

// Findet heraus wieviele ELemente im Root-Verzeichnis liegen 
var getElementsCountInRoot = app.project.rootItem.children.length

// setzt den letzten erstellten Ordner im Root-Verzeichnis als Quelle
var newFolder = project.rootItem.children[getElementsCountInRoot - 1]


// Schiebt alle Clips in der Quelle "newFolder" in ein Array, das ClipArray heißt
var clipArray = []

function createArrayOfGraphicClips() {
    for (var i=0; i < newFolder.children.length; i++) {
        clipArray.push(newFolder.children[i])
    }
}

createArrayOfGraphicClips()

// Erstellt eine neue Sequenz aus den Elementem im ClipArray --- ("NAME", clipArray, ZIELPFAD)
var newSequence = project.createNewSequenceFromClips("New Sequence", clipArray, newFolder)

