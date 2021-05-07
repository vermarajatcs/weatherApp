const currentDate = document.getElementById('date');
const weathercon = document.getElementById('Weather-img');
const temp = "clouds";

const currentDay = () =>
{
    let currentDay = new Date();
   var weekdays =["Mon","Tue","Wed","Thru","Fri","Sat","Sun"];
  // console.log(currentTime.getDay());

    let day= (weekdays[currentDay.getDay()-1]);
 return day;
}


const getCurrentTime =() => {
    
    let currentTime = new Date();
    var monthName = ["jan","feb","Marc","April","May","June","July","Aug","Sep","oct","Nov","Dec"];
    let month = monthName[currentTime.getMonth()];
    let date = currentTime.getDate();
    //console.log(month +"/" + date);

    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let ampm = hour>= 12 ? 'pm' : 'am';
   // console.log(hour+":"+minute ,ampm);

   return `${month} ${date}| ${hour}:${minute}${ampm}`;
}
currentDate.innerHTML= currentDay() +"|" + getCurrentTime();