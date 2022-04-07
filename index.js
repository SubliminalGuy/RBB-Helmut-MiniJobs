var bla = {"Plattform":[{"Name":"twitter","Kanal":{"Name":"Blossnicht Langweilen","ID":"25770"}},{"Name":"youTube","Kanal":{"Name":"Blossnicht Langweilen","ID":"25771"}},{"Name":"facebook","Kanal":{"Name":"Langeweile im Testsystem","ID":"28478"}},{"Name":"instagram","Kanal":{"Name":"Bloss nicht langweilen","ID":"49499"}}]}


var channelId = ""

function createChannelId(kanal) {

for (var i=0; i < bla.Plattform.length; i++) {
  
  if (bla.Plattform[i].Name == kanal) {
    channelId = bla.Plattform[i].Kanal.ID
  }
  
}

return channelId
}

console.log(createChannelId("twitter"))