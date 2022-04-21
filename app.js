// A PROGRAM THAT TELLS A USER HIS AGE LEFT IN DAYS, MONTHS AND WEEKS AFTER CURRENT AGE IS SUBTRACTED FROM 90.

function lifeInWeeks(age) {
    var presentAge = prompt("Input current age");
    var ageDifference = age - presentAge;
    let noDays = 365;
    let noWeeks = 54;
    let noMonths = 12;
    var xDays = ageDifference * noDays;
    var yWeeks = ageDifference * noWeeks;
    var zMonths = ageDifference * noMonths;

    output = "You have " + xDays + "days, " + yWeeks + "weeks, " + zMonths + "months left."
    
    alert(output);
}
lifeInWeeks(90)
