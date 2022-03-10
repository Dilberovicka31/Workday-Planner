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

//loop over time blocks and change color based on time
function timeColor() {
    for (var i = 0; i < description.length; i++) {
        var timeBlock = description[i].parentElement.id;
        var timeBlock = parseInt(timeBlock);
        if (timeBlock < currentTime) {
        description[i].classList.add("past");
        } else if (timeBlock == currentTime) {
        description[i].classList.add("present");
        } else if (timeBlock > currentTime) {
        description[i].classList.add("future");
        }
    }
    }
    timeColor();