import React from "react";

function DayView(props) {
  console.log("Start: ", props.date.startDate);
  console.log("End: ", props.date.endDate);
  let dStart = props.date.startDate;
  let dEnd = props.date.endDate;
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let tagStart = dStart.getDay();
  let tagEnd = dEnd.getDay();

  return (
    <div>
      <h2>Tag: {weekday[tagStart]}</h2>
      <p>
        {dStart.getDate()}|{dStart.getMonth() + 1}|{dStart.getFullYear()}
      </p>
      <h4>Tag: {weekday[tagEnd]}</h4>
      <p>
        {dEnd.getDate()}|{dEnd.getMonth() + 1}|{dEnd.getFullYear()}
      </p>
    </div>
  );
}

export default DayView;
