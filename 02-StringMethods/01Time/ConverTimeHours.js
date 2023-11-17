function convertTo24HrsFormat(time) {
    // Parse hour, minute, and period (AM/PM)
    time = time.toLowerCase() 
    let [hours, minutes] = time.split(':');
    

    if (time.endsWith('am')) {
        hours = hours == 12 ? '0' : hours;
    } else if (time.endsWith('pm')) {
        hours = hours === 12 ? hours : String(+hours + 12);
    }

    console.log(minutes.slice(0,-2).padStart(, 0))    
    return hours.padStart(2, 0) + ':' + minutes.slice(0, -2).padStart(2, 0)
    
}

console.log(`Converted time: ${convertTo24HrsFormat("1:5PM")}`); // Output should be '13:45'
console.log(`Converted time: ${convertTo24HrsFormat("03:45PM")}`); // Output should be '15:45'