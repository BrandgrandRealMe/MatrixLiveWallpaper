// switch to Hex Because my code uses hex but Wallpaper engine gives rgb
function RGBToHex(rgb) {
  console.log(rgb)
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

function WEtoCSS(color) {
  var customColor = color.split(' ');
            customColor = customColor.map(function(c) {
                return Math.ceil(c * 255);
            });
            var customColorAsCSS = 'rgb(' + customColor + ')';
            return customColorAsCSS
}

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

// Clock stuff
var clockEnabled = false;
var clockSecondsEnabled = false;
var clockDateEnabled = false;
var clockDateFormat = "MMMM DD, YYYY";
var clockColor = "#ffffff";
var clockFontSize = "50";
var dateFontSize = "30";
var clockPosition = "middle";

window.wallpaperPropertyListener = {
  applyUserProperties: function (properties) {
    if (properties.colorsBackground) {
      colors.background = RGBToHex(WEtoCSS(properties.colorsBackground.value));
    }
    if (properties.colorsForegroundPrimary) {
      colors.foregroundPrimary = RGBToHex(WEtoCSS(properties.colorsForegroundPrimary.value));
    }
    if (properties.colorsForegroundSecondary) {
      colors.foregroundSecondary = RGBToHex(WEtoCSS(properties.colorsForegroundSecondary.value));
    }
    if (properties.colorsEnableGradiant) {
      gradientEnabled = properties.colorsEnableGradiant.value;
    }
    if (properties.miscCharacters) {
      characters = properties.miscCharacters.value;
      refresh();
    }
    if (properties.miscFallSpeed) {
      fallSpeed = invertNumber(properties.miscFallSpeed.value);
      refresh();
    }
    if (properties.miscSymbolSize) {
      symbolSize = properties.miscSymbolSize.value;
      refresh();
    }
    if (properties.clockEnabled) {
      clockEnabled = properties.clockEnabled.value;
      ClockRefresh();
    }
    if (properties.clockSecondsEnabled) {
      clockSecondsEnabled = properties.clockSecondsEnabled.value;
      ClockRefresh();
    }
    if (properties.clockDateEnabled) {
      clockDateEnabled = properties.clockDateEnabled.value;
      ClockRefresh();
    }
    if (properties.clockDateFormat) {
      clockDateFormat = properties.clockDateFormat.value;
      ClockRefresh();
    }
    if (properties.clockColor) {
      clockColor = properties.clockColor.value;
      ClockRefresh();
    }
    if (properties.clockFontSize) {
      clockFontSize = properties.clockFontSize.value;
      ClockRefresh();
    }
    if (properties.dateFontSize) {
      dateFontSize = properties.dateFontSize.value;
      ClockRefresh();
    }
    if (properties.clockPosition) {
      clockPosition = properties.clockPosition.value;
      ClockRefresh();
    }
  }
}
