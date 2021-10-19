// Snippet um Premiere Einstellungen zu ändern

var bla = require('./PremiereOld.json')

module.exports = function changeSetting() {
bla.hidden = ["Farbe","Bibliotheken","Grafiken","Audio","Effekte"]

bla.overflow = ["Alle Fenster","Zusammenstellung","Metaprotokollierung","Bearbeitung","Training","Produktion"]

bla.shown = ["01 J-Schnitt","02 J-Import_Export","03 J-Audio","04 C-Schnitt","05 C-Audio","06 C-Farbe"]

return JSON.stringify(bla)

}

