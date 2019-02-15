var day_num = 1;



var liturgy = [
   {
       "titleText" : "Day 00: It's not Advent",

       "entryText" : "Come back on December 1st."
   },


   {
       "titleText" : "Day 01: The Turtle",

      "entryText" : "Lorem ipsum turtle. <em>Italics work</em> <strong>and bold</strong> <br/><br/> and breaks."
   }
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
    document.getElementById('day-title').innerHTML = liturgy[day_num].titleText;
    document.getElementById('entry').innerHTML = liturgy[day_num].entryText;
}


$( document ).ready(function() {
    console.log("### Loading page")
    ///
    ///
    loadLiturgy();
    ///
    ///
    console.log("### $( document ).ready(function() all executed")
});
