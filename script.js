var liturgy = [
   {
       "titleText" : "Day 00: It's not Advent",

        "imgName" : "day00.png",

       "entryText" : "Come back on December 1st."
   },


   {
       "titleText" : "Day 01: The Turtle",

       "imgName" : "day01.png",

      "entryText" : "Lorem ipsum turtle. <em>Italics work</em> <strong>and bold</strong> <br/><br/> and breaks."
    },
    {
        "titleText" : "Day 02: The Snake",

        "imgName" : "day02.png",

        "entryText" : "LONG-ASS LOREM IPSUM FOR TESTING SCROLLING THIS COLUMN WHILE THE REST OF THE PAGE STAYS FIXED<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];

///////////////////////////////////////
///////////////////////////////////////
// Unfortunately, must to stash entire liturgy object in here above, since ajax doesn't allow calls to local resources
///////////////////////////////////////
///////////////////////////////////////

function loadLiturgy(day_num) {
    document.getElementById('day-title').innerHTML = liturgy[day_num].titleText;
    document.getElementById('entry').innerHTML = liturgy[day_num].entryText;
}

function loadCalendar(day_num) {
    document.getElementById('calendar-img').src = ("assets/images/" + liturgy[day_num].imgName);
}


function dayOfAdvent() {
    var day_num = 0;
    var today = new Date();
    // console.log ("new Date() returned: " + today);
    // console.log ("today.getMonth() returned: " + today.getMonth());
    // console.log ("today.getDate() returned: " + today.getDate());
    if (today.getMonth() == 11 && today.getDate() < 26) { //zero-indexed, Dec is 11.
        console.log ("It's Advent.");
        day_num = today.getDate();
        console.log ("It's day " + today.getDate() + ".");

    }
    day_num = 2; // TESTING OVERRIDE until all days have images and entries
    return day_num;
}


$( document ).ready(function() {
    console.log("### Loading page")
    ///
    ///
    var day_num = dayOfAdvent();
    loadCalendar(day_num);
    loadLiturgy(day_num);
    ///
    ///
    console.log("### $( document ).ready(function() all executed")
});
