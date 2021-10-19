// Snippet um den Redaktionsnamen gegen Sendungsnamen zu tauschen




module.exports = function swapObject(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}