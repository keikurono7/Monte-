function calculatePi() {
  var numPointsInsideCircle = 0;
  for (var i = 0; i < 10000; i++) {
        var x = Math.random() * 175 + 351;
        var y = Math.random() * 350 + 0;
        if (Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2) < Math.pow(radius, 2)) {
          // Point is inside circle
          numPointsInsideCircle++;
          ctx.fillStyle = "#00FFFF";
        } else {
          // Point is outside circle
          ctx.fillStyle = "#0096FF";
        }
        // Draw point
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.fill();
  }
  return numPointsInsideCircle;
}

// listen for message from main thread
onmessage = function(e) {
  var result = calculatePi();
  // send result back to main thread
  postMessage(result);
};
