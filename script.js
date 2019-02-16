var day_num = 0;



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

        "entryText" : "Lorem ipsum snake. <em>Italics work</em> <strong>and bold</strong> <br/><br/> and breaks."
    },
];

///////////////////////////////////////
///////////////////////////////////////
// Unfortunately, must to stash entire liturgy object in here above, since ajax doesn't allow calls to local resources
///////////////////////////////////////
///////////////////////////////////////

function loadLiturgy() {
    document.getElementById('day-title').innerHTML = liturgy[day_num].titleText;
    document.getElementById('entry').innerHTML = liturgy[day_num].entryText;
}

function loadCalendar() {
    document.getElementById('calendar-img').src = ("assets/images/" + liturgy[day_num].imgName);
}


$( document ).ready(function() {
    console.log("### Loading page")
    ///
    ///
    loadCalendar();
    loadLiturgy();
    ///
    ///
    console.log("### $( document ).ready(function() all executed")
});
