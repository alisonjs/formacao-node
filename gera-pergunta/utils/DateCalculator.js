function passed_time(from){

    var years, months, days, hours, minutes, seconds;
    seconds = Math.floor(from / 1000);
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    days = Math.floor(hours / 24);
    hours = hours % 24;
    months = Math.floor(days / 30);
    days = days % 30;
    years = Math.floor(months / 12);
    months = months % 12;

    return {
        years,
        months, 
        days, 
        hours, 
        minutes, 
        seconds
    };
    
}

module.exports = passed_time;