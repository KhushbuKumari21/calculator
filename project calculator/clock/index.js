function updateclock(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentseconds = currentTime.getSeconds();
    currentHour =( currentHour>12)?currentHour-12:currentHour;
    currentHour=(currentHour==0)?12:currentHour;
    currentMinutes = (currentMinutes<10?"0":"")+currentMinutes;
    currentseconds=(currentseconds<10 ? "0":"")+currentseconds;
    let timeofDay = (currentHour<12)?"pm":"Am";
 let currentTimestr=currentHour+":"+currentMinutes+":"+currentseconds
  +" "+timeofDay;
    document.getElementById("clock").innerHTML= currentTimestr;
}