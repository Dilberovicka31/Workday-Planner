
var now = moment();
var today = $("#currentDay").text(moment().format("dddd, MMMM, Do " ));
var currentTime = moment().format("HH");
console.log(today);

var timePlace = [9,10,11,12,13,14,15,16,17];
var currHour = parseInt(now.format("H HH"));
console.log(currHour);

var description = ($(".description"));
var times = (".hour");
var row = (".time-block");


for (var i = 0; i < 9; i++) {
   if (times < currHour); {
        description.addClass("past");
    }
    
    if (times == currHour ); {
        description.addClass("present");
    }
    
    if (times > currHour); {
        description.addClass("future");
    }

}

//if current time === block time . hour


 $(".saveBtn").on("click", function(e) {
    e.preventDefault();
    var dataHour = $(this).attr("data-hr");
    var inputField = $("#" + dataHour ).val();
    localStorage.setItem(dataHour, inputField);

})

function renderPlanner (){
    for (var i=0; i <= currentTime; i++){
        $("#" + timePlace[i]).val(localStorage.getItem(timePlace[i]));
    }
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

   
