var liturgy = [
   {
       "titleText" : "Day 00: It's not Advent",

        "imgName" : "day00.png",

       "entryText" : "Come back on Dec. 1"
   },


   {
       "titleText" : "Day 01:<br/>The Turtle",

       "imgName" : "day01.png",

      "entryText" : "Turtle lets go everything she knows,<br/>everything she loves,<br/>and sinks down, way down<br/>into the dark beneath the pond.<br/>She rests utterly in God’s care.<br/>She is lost to all the self<br/>she has ever known.<br/>She cannot protect herself.<br/>She can only be still and wait.<br/>And from that darkness,<br/>that utter still and perfect<br/>waiting.<br/>she may be reborn<br/>when the earth warms<br/>and the sun grows stronger<br/>again and begins its journey<br/>to the summer house.<br/><div class='entrySource'>—letter from a friend</div>"
    },
    {
        "titleText" : "Day 02:<br/>The Snake",

        "imgName" : "day02.png",

        "entryText" : "At night<br/>under the trees<br/>the black snake<br/>jellies forward<br/>rubbing<br/>roughly<br/>the stems of the bloodroot,<br/>the yellow leaves,<br/>little boulders of bark,<br/>to take off<br/>the old life.<br/>I don’t know<br/>if he knows<br/>it will work.<br/>In the distance<br/>the moon and the stars<br/>give a little light.<br/>In the distance<br/>the owl cries out.<br/><br/>In the distance<br/>the owl cries out.<br/>The snake knows<br/>these are the owl’s woods,<br/>these are the woods of death,<br/>these are the woods of hardship<br/>where you crawl and rawl,<br/>where you live in the husks of trees,<br/>where you lie on the wild twigs<br/>and the cannot bear your weight,<br/>where life has no purpose<br/>and is neither civil nor intelligent.<br/><br/>Where life has no purpose,<br/>and is neither civil nor intelligent,<br/>it geins<br/>to rain,<br/>it begins<br/>to smell like the bodies<br/>of flowers.<br/>At the back of the neck<br/>the old skin splits.<br/>The snake shivers<br/>but does not hesitate.<br/>He inches forward.<br/>He begins to bleed through<br/>like satin.<br/><div class='entrySource'>—“The Forest” from “Rain” by Mary Oliver</div>"
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
