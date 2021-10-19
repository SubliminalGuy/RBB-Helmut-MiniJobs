

// Snippet um das Datumsformat im AME Stream zu ändern



module.exports = function dateChange(date) {
var newDate;
  if (date) {
    dateArray = date.split(" ")

    dateArray[0 ]= dateArray[0].split("-").join(".")
    dateArray[1] = dateArray[1].concat(":00")
    newDate = dateArray.join(" ")
 }
else {
    newDate = date
  }
  return newDate
}
