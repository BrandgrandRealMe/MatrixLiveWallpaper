function invertNumber(number) {
  // Check if the number is within the valid range
  if (number < 1 || number > 100) {
    throw new Error("Number must be between 1 and 100");
  }

  // Invert the number using the total range (100) minus the original number
  return 101 - number;
}

var colors = { background: "#000000", foregroundPrimary: "#00ff00", foregroundSecondary: null, firstCharacter: "#ffffff" };

var gradientEnabled = false;
var characters = "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
var fallSpeed = 33;
var symbolSize = 15;

// Clock stuff
var clockEnabled = qs("clock") || false;
var clockSecondsEnabled = qs("clockseconds") || false;
var clockDateEnabled = qs("clockdate") || false;
var clockDateFormat = decodeURIComponent(qs("clockdateformat")) || "MMMM DD, YYYY";
var clockColor = qs("clockcolor") || "#ffffff";
var clockFontSize = qs("clockfontsize") || "50";
var dateFontSize = qs("datefontsize") || "30";
var clockPosition = qs("clockposition") || "middle";

function livelyPropertyListener(name, val) {
  switch (name) {
    case "colorsBackground":
      colors.background = val;
      break;
    case "colorsForegroundPrimary":
      colors.foregroundPrimary = val;
      break;
    case "colorsForegroundSecondary":
      colors.foregroundSecondary = val;
      break;
    case "colorsEnableGradiant":
      gradientEnabled = val;
      break;
    case "miscCharacters":
      characters = val;
      refresh();
      break;
    case "miscFallSpeed":
      fallSpeed = invertNumber(val);
      refresh();
      break;
    case "miscSymbolSize":
      symbolSize = val;
      refresh();
      break;
    case "clockEnabled":
      clockEnabled = val;
      ClockRefresh();
      break;
    case "clockSecondsEnabled":
      clockSecondsEnabled = val;
      ClockRefresh();
      break;
    case "clockDateEnabled":
      clockDateEnabled = val;
      ClockRefresh();
      break;
    case "clockDateFormat":
      var Formats = [
        "MM/DD/YYYY",
        "DD/MM/YYYY",
        "YYYY-MM-DD",
        "MMMM DD, YYYY"
      ];
      clockDateFormat = Formats[val];
      ClockRefresh();
      break;
    case "clockColor":
      clockColor = val;
      ClockRefresh();
      break;
    case "clockFontSize":
      clockFontSize = val;
      ClockRefresh();
      break;
    case "dateFontSize":
      dateFontSize = val;
      ClockRefresh();
      break;
    case "clockPosition":
      var Positions = [
        "middle",
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left"
      ];
      clockPosition = Positions[val];
      ClockRefresh();
      break;
  }
}
