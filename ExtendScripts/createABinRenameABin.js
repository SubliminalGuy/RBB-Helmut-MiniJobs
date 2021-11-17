var proj = app.project;


// Create A Bin
//proj.rootItem.createBin("ExtendScriptBin")

// Locate the Bin
var binToRename = findBinByName()


// Find BIN with Name XY
function findBinByName() {
    
    for (var i = 0; i < proj.rootItem.children.length; i++) {
       if (proj.rootItem.children[i].name == "01_Master" // ALTER NAME ALS STRING //) {
            return proj.rootItem.children[i]
        }
        else {return "NotFound"}
        
    }
}

// Rename the BIN

binToRENAME.name = "01_Mastersequenzen" // NEUER NAME ALS STRING //




