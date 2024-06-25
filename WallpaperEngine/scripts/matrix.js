// Converting Hex to RGBA
function hexToRgb(hex, alpha) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (alpha) return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`;
  if (!alpha) return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
}

// getting gradient color
function getGradientColor(startColor, endColor, percentage) {
  // seperate RG and B
  var startColor = startColor.substring(4, startColor.length - 1)
    .replace(/ /g, '')
    .split(',');
  var endColor = endColor.substring(4, endColor.length - 1)
    .replace(/ /g, '')
    .split(',');


  // Normalize percentage to range 0 to 1
  const perc = Math.min(Math.max(percentage / 100, 0), 1);

  // Extract RGB components for start and end colors
  const startR = parseInt(startColor[0], 16);
  const startG = parseInt(startColor[1], 16);
  const startB = parseInt(startColor[2], 16);
  const endR = parseInt(endColor[0], 16);
  const endG = parseInt(endColor[1], 16);
  const endB = parseInt(endColor[2], 16);

  // Calculate interpolated RGB values for the gradient color
  const r = Math.floor(startR + (endR - startR) * perc);
  const g = Math.floor(startG + (endG - startG) * perc);
  const b = Math.floor(startB + (endB - startB) * perc);

  // Return the gradient color in RGB format
  return `rgb(${r}, ${g}, ${b})`;
}

// Setting up drawId stuff
var drawId;

// Initialising the canvas
var canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d');

// Setting up the letters
letters = characters.split('');

var fontSize, columns, drops;

function refresh() {
  // Setting the width and height of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Setting up the columns
  fontSize = symbolSize,
    columns = canvas.width / fontSize;

  // Setting up the drops
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }
  
  if (drawId) clearInterval(drawId);
  drawId = setInterval(draw, fallSpeed);
}

// Setting up the draw function
function draw() {
  document.body.style.backgroundColor = hexToRgb(colors.background);
  ctx.fillStyle = hexToRgb(colors.background, 0.1);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    if (gradientEnabled) {
      var y = drops[i] * fontSize;
      var perc = (y / canvas.height) * 100;
      var gradient = getGradientColor(hexToRgb(colors.foregroundPrimary), hexToRgb(colors.foregroundSecondary), perc);
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = hexToRgb(colors.foregroundPrimary);
    }
    ctx.font = fontSize + 'px monospace';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}
let resizeObserver = new ResizeObserver(() => {
  refresh();
});

var MATRIX = document.getElementById("MATRIX");
resizeObserver.observe(MATRIX);

// Loop the animation & Set size
refresh();