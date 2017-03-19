var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

function formatDD(day) {
    if(day<10) {
        return '0'+day
    } 
    return day;
}

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+(formatDD(dd))+'/'+yyyy;
console.log(today);
tomorrowdd=dd+1;
tomorrow = mm+'/'+(formatDD(tomorrowdd))+'/'+yyyy;

function getDayName() {
    $("#dayName").html(weekday[d.getDay()]);
};

function getCurrentDate() {
    $("#currentDate").html(today);
};

function getTomorrowName() {
    $("#tomorrowName").html(weekday[d.getDay()+1]);
}

function getTomorrowDate() {
    $("#tomorrowDate").html(tomorrow);
};

/*DUmmy Data to populate dashboard*/
var text = ["Monday", [12546, 'Advil', '7:00 AM', 'Yes'], [02546, 'Adderall', '8:00 AM', 'No'], [14746, 'Advil', '2:00 PM', 'No']];

/*Creates list for each dashboard*/
function generateMedList(list) {
    for (i = 1; i < list.length; i++) {
        var takenIndicator = "<img class='col-xs-4 green-check' src='assets/emptyCircle.png' onclick=diffImage(this)>";
        if (list[i][3] === 'Yes') {
            takenIndicator = "<img class='col-xs-4 green-check' src='assets/greenCheck.png' onclick=diffImage(this)>"
        }
        $("#medicationList").append(
            "<div class='row med-item col-xs-12' onclick='location.href=\"EditMedication.html\"'> \
                <div class='row'> \
                    <label id='medTime'>" + list[i][3] + "</label> \
                </div> \
                <div class='row'> \
                    " + takenIndicator + "\
                    <div class='col-xs-5 medName'>" + list[i][1] + "</div> \
                    <div class='col-xs-3 medDosage'>" + list[i][2] + "</div> \
                </div> \
            </div>"
        );
    }
};

/*Changes image on whether or not a person took their pill*/
function diffImage(img) 
{
   if(img.src.match("assets/emptyCircle.png")) img.src = "assets/greenCheck.png";
   else img.src = "assets/emptyCircle.png";
}

/*adds anotehr time conatiner to the addmedication page*/
function addAnotherTime(){
    $("#time").append($(".timecontainer").html());
};

/*scrolls the right arrow as the window scrolls*/
$(window).scroll(function(){
    $('#rightArrow').css({
        'top': $(this).scrollTop() +100 //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
    });
});
