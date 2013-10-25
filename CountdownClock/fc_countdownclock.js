// https://github.com/FreebirdSoftware/fiddlins

function startClock(targetDate, targetDiv) {
    console.log('Counting down from '+ targetDate);
    
    var daysVal = "";
    var hoursVal = "";
    var minutesVal = "";
    var secondsVal = "";

    var target_date = new Date(targetDate).getTime();
    var days, hours, minutes, seconds;
    var countdown = document.getElementById(targetDiv);

    setInterval(function () {
        var current_date = new Date().getTime();
        var seconds_left = parseInt((target_date - current_date) / 1000);
        var days = Math.floor(seconds_left / 86400);
        var hours = Math.floor((seconds_left % 86400) / 3600);
        var minutes = Math.floor(((seconds_left % 86400) % 3600) / 60);
        var seconds = ((seconds_left % 86400) % 3600) % 60;
        
        if (days > 1) { daysVal = days + " days, "; }
        else if (days === 1) { daysVal = days + " day, ";  }
        else { daysVal = ""; }

        if (hours > 1) { hoursVal = hours + " hours, "; }
        else if (hours === 1) { hoursVal = hours + " hour, "; }
        else { hoursVal = ""; }

        if (minutes > 1) { minutesVal = minutes + " minutes, "; }
        else if (minutes === 1) { minutesVal = minutes + " minute, "; }
        else { minutesVal = ""; }

        if (seconds > 1) { secondsVal = seconds + " seconds"; }
        else if (seconds === 1) { secondsVal = seconds + " second"; }
        else { secondsVal = ""; }

        countdown.innerHTML = daysVal + hoursVal + minutesVal + secondsVal;
        
    }, 1000);

}