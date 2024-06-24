function qs(search_for) { // gets quary strings  (www.example.com/?thing=var&thing2=var2)
  var query = window.location.search.substring(1);
  var parms = query.split(/[+&]+/);
  for (var i = 0; i < parms.length; i++) {
    var pos = parms[i].indexOf('=');
    if (pos > 0 && search_for == parms[i].substring(0, pos)) {
      return parms[i].substring(pos + 1);;
    }
  }
  return "";
}

var colors = { background: qs("bg") || "#000000", foregroundPrimary: qs("fgp") || "#00ff00", foregroundSecondary: qs("fgs") || null, firstCharacter:  qs("fcc") || "#ffffff"};

var gradientEnabled = qs("gradient") || false;
var characters = qs("chars") || "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
var fallSpeed = qs("fs") || 33;
var symbolSize = qs("ss") || 10;