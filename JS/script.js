var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 
today = mm+'/'+dd+'/'+yyyy;

function getDayName() {
    $("#dayName").html(weekday[d.getDay()]);
};

function getCurrentDate() {
    $("#currentDate").html(today);
};

function generateMedList() {
    console.log('ready');
    for (i = 0; i < weekday.length; i++) {
        $("#medicationList").append(
            "<div class='row med-item col-xs-12'> \
                <div class='row'> \
                    <label>8:00 am</label> \
                </div> \
                <div class='row'> \
                    <img class='col-xs-4 green-check' src='assets/emptyCircle.png'> \
                    <div class='col-xs-8'>Adderall</div> \
                </div> \
                <div class='row'> \
                    <img class='col-xs-4 green-check' src='assets/greenCheck.png'> \
                    <div class='col-xs-8'>Advil</div> \
                </div> \
            </div>"
        );
    }
};

function generateMedication() {
    "<div class='row'> \
        <img class='col-xs-4 green-check' src='assets/greenCheck.png'> \
        <div class='col-xs-8'>Adderall</div> \
    </div>"
};