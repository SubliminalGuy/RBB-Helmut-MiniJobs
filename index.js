var bla = [{"Name":"twitter","Kanal":{"Name":"Blossnicht Langweilen","ID":"25770"}},{"Name":"youTube","Kanal":{"Name":"Blossnicht Langweilen","ID":"25771"}},{"Name":"facebook","Kanal":{"Name":"Langeweile im Testsystem","ID":"28478"}},{"Name":"instagram","Kanal":{"Name":"Bloss nicht langweilen","ID":"49499"}}]


bla = bla.sort((a,b) => {
  if (a.Name < b.Name) {
    return -1
  }
  return 0
})

console.log(bla)


/*
var plattform = []

function readChannels(swatChannels) {

 for (var i=0; i <swatChannels.length;i++) {
plattform.push({"Name": mapNames(swatChannels[i].attributes.category), 
"Kanal": {
"Name": swatChannels[i].attributes.name,
"ID": swatChannels[i].id
}})
}
}

function mapNames(name) {
  if (name === "tw") {
    return "twitter";
  } else if (name === "yt") {
    return "youTube";
  } else if (name === "fb") {
    return "facebook";
  } else if (name === "in") {
    return "instagram";
  } else {
    return name;
  }
}
*/