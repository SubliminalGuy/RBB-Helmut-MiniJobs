var bla = require('./job.json')

module.exports = function metaDataChange() {
  var Material = bla.metadata.filter(item => item.name == "Sendedatum")
  Material[0].value = 0
  return Material[0]
}