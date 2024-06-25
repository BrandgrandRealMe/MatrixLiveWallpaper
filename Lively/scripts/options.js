function invertNumber(number) {
  // Check if the number is within the valid range
  if (number < 1 || number > 100) {
    throw new Error("Number must be between 1 and 100");
  }

  // Invert the number using the total range (100) minus the original number
  return 101 - number;
}

var colors = { background: "#000000", foregroundPrimary: "#00ff00", foregroundSecondary: null, firstCharacter: "#ffffff"};

var gradientEnabled = false;
var characters = "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
var fallSpeed = 33;
var symbolSize = 15;


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
  }
}
