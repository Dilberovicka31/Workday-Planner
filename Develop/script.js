var now = moment();
var today = $("#currentDay").text(moment().format("dddd, MMMM, Do"));
var currentTime = moment().format("HH");
console.log(today);

console.log(currentTime);
var description = $(".description");

//change time blocks color based on time
function timeColor() {}

$(".saveBtn").on("click", function (e) {
  e.preventDefault();
  var selectedTimeBlock = $(this).parent().attr("id");
  var selectedDescription = $(this).siblings(".description").val();
  localStorage.setItem(selectedTimeBlock, selectedDescription);
});

function renderPlanner() {
  //get data out of local storage
  var storedData = localStorage.getItem("9");
  $("#9 .description").val(storedData);
  var storedData = localStorage.getItem("10");
  $("#10 .description").val(storedData);
  var storedData = localStorage.getItem("11");
  $("#11 .description").val(storedData);
  var storedData = localStorage.getItem("12");
  $("#12 .description").val(storedData);
  var storedData = localStorage.getItem("13");
  $("#13 .description").val(storedData);
  var storedData = localStorage.getItem("14");
  $("#14 .description").val(storedData);
  var storedData = localStorage.getItem("15");
  $("#15 .description").val(storedData);
  var storedData = localStorage.getItem("16");
  $("#16 .description").val(storedData);
  var storedData = localStorage.getItem("17");
  $("#17 .description").val(storedData);
}

renderPlanner();

//var i = 9;
//Element ID = "hour" + i;
//FOR  Loop over the hours of the day I = 9 to i <= 17

//Color code them depends on the past, current, future

//Currently checking  9AM < the current hour
//9am is in the past
//Select matching element - $(  Element id )

// OPTION -A Select matching element - $( Element ID ).css ("background");
// OPTION -B Select matching element - $( Element ID ).addClass ("is-past");
