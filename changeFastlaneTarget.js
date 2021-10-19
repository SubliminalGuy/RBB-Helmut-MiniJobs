var fastlaneTarget = "Nein"

module.exports = function fastLaneMapper() {
if(fastlaneTarget == "Potsdam") {
  return 1
}
else if (fastlaneTarget == "Berlin") {
  return 1
}
else {
  return 0
}

}