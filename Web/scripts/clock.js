var timerId;

var clockBox = document.getElementById("CLOCK-BOX");
var clockItems = document.getElementById("CLOCK-ITEMS");
var clockDate = document.getElementById("CLOCK-DATE");
var clockTime = document.getElementById("CLOCK-TIME");

const formatRegexps = {
  "MM/DD/YYYY": /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
  "DD/MM/YYYY": /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
  "YYYY-MM-DD": /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
  "MMMM DD, YYYY": /^(.+) (\d+), (\d{4})$/, // Capture month name, day, year
};

function formatDate(date, format) {
  // Format the date according to the user-specified format
  let formattedDate = "";
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  switch (format) {
    case "MM/DD/YYYY":
      formattedDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
      break;
    case "DD/MM/YYYY":
      formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      break;
    case "YYYY-MM-DD":
      formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      break;
    case "MMMM DD, YYYY":
      formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
      break;
    default:
      alert("Unsupported date format! " + format);
      return;
  }

  return formattedDate;
}


function ClockSetSizePos() {
  clockTime.style.fontSize = clockFontSize + "px";
  clockDate.style.fontSize = dateFontSize + "px";
  if (clockPosition == "middle") {
    clockBox.style.justifyContent = "center";
    clockItems.style.alignItems = "center";
    clockBox.style.alignItems = "center";
  }
  if (clockPosition == "top-right") {
    clockBox.style.justifyContent = "right";
    clockItems.style.alignItems = "flex-end";
    clockBox.style.alignItems = "top";
  }
  if (clockPosition == "bottom-right") {
    clockBox.style.justifyContent = "right";
    clockItems.style.alignItems = "flex-end";
    clockBox.style.alignItems = "flex-end";
  }
  if (clockPosition == "bottom-left") {
    clockBox.style.alignItems = "flex-end";
  }
}

function ClockChangeTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Format hours with leading zero if needed (01 instead of 1)
  hours = hours % 12 || 12; // 0 for midnight, 12 for noon

  // Format minutes with leading zero
  minutes = minutes.toString().padStart(2, '0');

  // Determine AM/PM
  var ampm = hours >= 12 ? 'PM' : 'AM';

  if (clockEnabled) {
    clockBox.style.display = "flex";
    if (clockSecondsEnabled) {
      seconds = seconds.toString().padStart(2, '0');
      var formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
      clockTime.innerHTML = formattedTime;
    } else {
      var formattedTime = `${hours}:${minutes} ${ampm}`;
      clockTime.innerHTML = formattedTime;
    }
    if (clockDateEnabled) {
      clockDate.innerHTML = formatDate(date, clockDateFormat);
    }
  } else {
    clockBox.style.display = "none";
  }
}

function ClockRefresh() {
  if (timerId) clearInterval(timerId);
  timerId = setInterval(ClockChangeTime, 30);
  ClockSetSizePos()
}

ClockRefresh()