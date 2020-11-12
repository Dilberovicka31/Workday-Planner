
var now = moment();
var today = $("#currentDay").text(now.format("MMMM Do YYYY, h:mm:ss a" ));









   

 

  
 
    
    //var i = 9;
    //Element ID = "hour" + i;
    //FOR  Loop over the hours of the day I = 9 to i <= 17

    //Color code them depends on the past, current, future

    //Currently checking  9AM < the current hour
    //9am is in the past
    //Select matching element - $(  Element id ) 

    // OPTION -A Select matching element - $( Element ID ).css ("background");
    // OPTION -B Select matching element - $( Element ID ).addClass ("is-past");

    //Save data in the local storage - addEventlistener click on a parent element to listen to save button event delegation 
    //event propagation 
