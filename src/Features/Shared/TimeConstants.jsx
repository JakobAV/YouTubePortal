/* Time in seconds */
export const MINUTE = 60;
export const HOUR = 3600;
export const DAY = 86400;
export const MONTH = 259200;
export const YEAR = 31556926;
export const YEAR_WITH_LEAP = 31557600;

export default function getTimePassed(date){
    let dtNow = new Date();
    let dtPublishedAt = new Date(date);
    let secondsPassed = (dtNow - dtPublishedAt)/1000;
    debugger;
    if(secondsPassed > YEAR_WITH_LEAP){
        let count = Math.floor(secondsPassed / YEAR_WITH_LEAP);
        return count > 1 ? count + " years ago" : count + " year ago";
    }
    if(secondsPassed > YEAR){
        let count = Math.floor(secondsPassed / YEAR);
        return count + " year ago";
    }
    if(secondsPassed > MONTH){
        let count = Math.floor(secondsPassed / MONTH);
        return count > 1 ? count + " months ago" : count + " month ago";
    }
    if(secondsPassed > DAY){
        let count = Math.floor(secondsPassed / DAY);
        return count > 1 ? count + " days ago" : count + " day ago";
    }
    if(secondsPassed > HOUR){
        let count = Math.floor(secondsPassed / HOUR);
        return count > 1 ? count + " hours ago" : count + " hour ago";
    }
    if(secondsPassed > MINUTE){
        let count = Math.floor(secondsPassed / MINUTE);
        return count > 1 ? count + " minutes ago" : count + " minute ago";
    }
        let count = secondsPassed;
        return count + " days ago";
}
