const start = document.getElementById("startButton");

start.addEventListener("click", function () {
  const canvas = document.getElementById("canvas");
  var cxt = canvas.getContext("2d");

  canvas.width = 500;
  canvas.height = 500;

  drawTree = function (
    initialX,
    initialY,
    length,
    angle,
    subBranchCount,
    thickness
  ) {
    if (subBranchCount === 0) return;

    cxt.beginPath();
    cxt.moveTo(initialX, initialY);

    let endX = initialX + length * Math.cos((angle * Math.PI) / 180);
    let endY = initialY + length * Math.sin((angle * Math.PI) / 180);

    cxt.lineTo(endX, endY);
    cxt.stroke();

    let newLength = length * 0.7;
    let newSubBranchCount = subBranchCount - 1;
    let newThickness = thickness * 0.7;

    let newLeftAngle = angle + 35;
    drawTree(
      endX,
      endY,
      newLength,
      newLeftAngle,
      newSubBranchCount,
      newThickness
    );

    let newRightAngle = angle - 35;
    drawTree(
      endX,
      endY,
      newLength,
      newRightAngle,
      newSubBranchCount,
      newThickness
    );
  };

  cxt.strokeStyle = "#000000";
  var thickness = 50;
  var trunkLength =100;
  var trunkAngle = -90;
  var subBranchCount = 10;

  drawTree(
    canvas.width / 2,
    canvas.height,
    trunkLength,
    trunkAngle,
    subBranchCount,
    thickness
  );
});
