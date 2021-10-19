
var testString = "523785681"

module.exports = function amplifier() {
  var length = testString.length
  var substituteString = makeid(26-length)
  var concatString = testString.concat(substituteString)
  return concatString
}



function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}