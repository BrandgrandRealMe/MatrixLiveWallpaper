// switch to Hex Because my code uses hex but Wallpaper engine gives rgb
function RGBToHex(rgb) {
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

var colors = { background: "#000000", foregroundPrimary: "#00ff00", foregroundSecondary: null, firstCharacter: "#ffffff"};

var gradientEnabled = false;
var characters = "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
var fallSpeed = 33;
var symbolSize = 15;

window.wallpaperPropertyListener = {
  applyUserProperties: function (properties) {
    if (properties.colorsBackground) {
      colors.background = properties.colorsBackground.value;
    }
    if (properties.colorsForegroundPrimary) {
      colors.foregroundPrimary = properties.colorsForegroundPrimary.value;
    }
    if (properties.colorsForegroundSecondary) {
      colors.foregroundSecondary = properties.colorsForegroundSecondary.value;
    }
    if (properties.colorsEnableGradiant) {
.     gradientEnabled = properties.colorsEnableGradiant.value;
    }
    if (properties.miscCharacters) {
      characters = properties.miscCharacters.value
    }
    if (properties.miscFallSpeed) {
      fallSpeed = properties.miscFallSpeed.value;
    }
    if (properties.miscSymbolSize) {
      symbolSize = properties.miscSymbolSize.value
    }
  }
}