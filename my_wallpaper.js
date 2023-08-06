//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 75;
}

function wallpaper_background() {
  background(23, 19, 10); //light honeydew green colour (originally 240, 255, 240) //very dark dark brown
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
   
  //Draws a flower thing
  
  
  //drawRandomFlowers();

  //Draws a clover
  //drawClover();

  drawFrame();

  drawMiddlePetals();
  drawInnerPetals();

  drawButterfly();




}


function drawInnerPetals(){

  let centreX = 100; //this was 100
  let centreY = 150;
  let bottomPetalY = centreY + 15;
  let petalWidth = 10; //this was 25
  let topPetalHeight = 15; //this was 30

  let lightPink = color(219, 83, 104); 
  let innerOutline = color(166, 48, 66);

  let leftX = 55;
  let leftY = 140;
  let bottomLeftY = leftY + 15;

  let rightX = 140;
  let rightY = 140;
  let bottomRightY = rightY + 15;

  //Draws inner petals
  fill(lightPink);
  stroke(innerOutline);
  strokeWeight(0.5);
  rect(centreX, centreY, petalWidth, topPetalHeight, 20, 5, 30, 5); //first inner petal
  rect(centreX, bottomPetalY, petalWidth, topPetalHeight, 5, 30, 5, 20); //second inner petal
  rect(centreX - 10, bottomPetalY, petalWidth, topPetalHeight, 30, 5, 20, 5); //third inner petal
  rect(centreX - 10, centreY, petalWidth, topPetalHeight, 5, 20, 5, 30); //last inner petal
  circle(centreX, centreY + 15, 7);
  //middle

  rect(leftX, leftY, petalWidth, topPetalHeight, 20, 5, 30, 5); //first inner petal
  rect(leftX, bottomLeftY, petalWidth, topPetalHeight, 5, 30, 5, 20); //second inner petal
  rect(leftX - 10, bottomLeftY, petalWidth, topPetalHeight, 30, 5, 20, 5); //third inner petal
  rect(leftX - 10, leftY, petalWidth, topPetalHeight, 5, 20, 5, 30); //last inner petal
  circle(leftX, leftY + 15, 7);
  //left

  rect(rightX, rightY, petalWidth, topPetalHeight, 20, 5, 30, 5); //first inner petal
  rect(rightX, bottomRightY, petalWidth, topPetalHeight, 5, 30, 5, 20); //second inner petal
  rect(rightX - 10, bottomRightY, petalWidth, topPetalHeight, 30, 5, 20, 5); //third inner petal
  rect(rightX - 10, rightY, petalWidth, topPetalHeight, 5, 20, 5, 30); //last inner petal
  circle(rightX, rightY + 15, 7);
  //right


}

function drawMiddlePetals(){
  let middlePink = color(245, 171, 203); 
  let middleOutline = color(163, 72, 86);

  //Draws middle petals
  let upCentreX = 110; //this was 100
  let upCentreY = 130;
  let mPetalWidth = 10; //this was 30
  let mPetalHeight = 10; //this was 30
  let leftX = 65;
  let leftY = 120;
  let rightX = 150;
  let rightY = 120;
  fill(middlePink);
  stroke(middleOutline);
  strokeWeight(1);

  rect(upCentreX - 4, upCentreY + 15, mPetalWidth, mPetalHeight, 20, 1, 30, 1); //first middle petal (top right)
  rect(upCentreX - 2, upCentreY + 25, mPetalWidth, mPetalHeight + 5, 1, 30, 30, 1); //second middle petal (right)
  rect(upCentreX - 2, upCentreY + 41, mPetalWidth , mPetalHeight, 1, 30, 1, 30); //third middle petal (bottom right)
  rect(upCentreX - 15, upCentreY + 44, mPetalWidth , mPetalHeight, 1, 1, 30, 30); //fourth middle petal (bottom)
  rect(upCentreX - 28, upCentreY + 41, mPetalWidth , mPetalHeight, 30, 1, 30, 1); //fifth middle petal (bottom left)
  rect(upCentreX - 28, upCentreY + 25, mPetalWidth, mPetalHeight + 5, 30, 1, 1, 30); //sixth middle petal (left)
  rect(upCentreX - 25, upCentreY + 15, mPetalWidth, mPetalHeight, 1, 20, 1, 30); //seventh middle petal (top left)
  rect(upCentreX - 15, upCentreY + 15, mPetalWidth, mPetalHeight, 30, 30, 1, 1); //last petal (top)
  //middle

  rect(leftX - 4, leftY + 15, mPetalWidth, mPetalHeight, 20, 1, 30, 1); //first middle petal (top right)
  rect(leftX - 2, leftY + 25, mPetalWidth, mPetalHeight + 5, 1, 30, 30, 1); //second middle petal (right)
  rect(leftX - 2, leftY + 41, mPetalWidth , mPetalHeight, 1, 30, 1, 30); //third middle petal (bottom right)
  rect(leftX - 15, leftY + 44, mPetalWidth , mPetalHeight, 1, 1, 30, 30); //fourth middle petal (bottom)
  rect(leftX - 28, leftY + 41, mPetalWidth , mPetalHeight, 30, 1, 30, 1); //fifth middle petal (bottom left)
  rect(leftX - 28, leftY + 25, mPetalWidth, mPetalHeight + 5, 30, 1, 1, 30); //sixth middle petal (left)
  rect(leftX - 25, leftY + 15, mPetalWidth, mPetalHeight, 1, 20, 1, 30); //seventh middle petal (top left)
  rect(leftX - 15, leftY + 15, mPetalWidth, mPetalHeight, 30, 30, 1, 1); //last petal (top)
  //left

  rect(rightX - 4, rightY + 15, mPetalWidth, mPetalHeight, 20, 1, 30, 1); //first middle petal (top right)
  rect(rightX - 2, rightY + 25, mPetalWidth, mPetalHeight + 5, 1, 30, 30, 1); //second middle petal (right)
  rect(rightX - 2, rightY + 41, mPetalWidth , mPetalHeight, 1, 30, 1, 30); //third middle petal (bottom right)
  rect(rightX - 15, rightY + 44, mPetalWidth , mPetalHeight, 1, 1, 30, 30); //fourth middle petal (bottom)
  rect(rightX - 28, rightY + 41, mPetalWidth , mPetalHeight, 30, 1, 30, 1); //fifth middle petal (bottom left)
  rect(rightX - 28, rightY + 25, mPetalWidth, mPetalHeight + 5, 30, 1, 1, 30); //sixth middle petal (left)
  rect(rightX - 25, rightY + 15, mPetalWidth, mPetalHeight, 1, 20, 1, 30); //seventh middle petal (top left)
  rect(rightX - 15, rightY + 15, mPetalWidth, mPetalHeight, 30, 30, 1, 1); //last petal (top)
  //right

}

function drawFrame(){
  let frameHeight = 150;
  let frameWidth = 100;
  let frameColour = color(148, 149, 153); 
  let innerFrameColour = color(71,71, 74);
  let frameDetail = color(45, 46, 54);
  let gold = color(168, 102, 47);
  let blue = color(95, 204, 237);

  stroke(frameColour);
  strokeWeight(8);
  noFill();
  ellipse(100, 100, frameWidth, frameHeight);
  strokeWeight(0.6);

  stroke(frameDetail);
  ellipse(100, 100, frameWidth + 7, frameHeight + 7);



  stroke(blue);
  strokeWeight(1);
  noFill();
  ellipse(100, 100, frameWidth + 10, frameHeight + 10);

  fill(innerFrameColour);
  noStroke();
  ellipse(100, 100, frameWidth - 5, frameHeight - 5);
}

function drawButterfly(){
  let butterflyX = 100;
  let butterflyY = 70;
  let wingWidth = 15;
  let wingHeight = 20;
  let butterflyColour = color(98, 54, 186);
  let outline = color(111, 172, 237);
  let lightPurple = color(154, 87, 179);

  fill(butterflyColour);
  stroke(outline);
  strokeWeight(1);
  rect(butterflyX, butterflyY, wingWidth, wingHeight, 45, 1, 45, 1); //top right
  rect(butterflyX - 15, butterflyY, wingWidth, wingHeight, 1, 45, 1, 45); //top left
  rect(butterflyX, butterflyY + 20, wingWidth -3, wingHeight -3, 1, 30, 1, 30); //bottom right
  rect(butterflyX - 12, butterflyY + 20, wingWidth - 3, wingHeight - 3, 30, 1, 30, 1); //bottom left

  ellipse(112, 83, 8, 10);
  noStroke();
  ellipse(111, 83, 8, 10);

  stroke(outline);
  ellipse(115, 78, 8, 10);
  noStroke();
  ellipse(114, 78, 8, 10);
  stroke(outline);

  ellipse(88, 83, 8, 10);
  noStroke();
  ellipse(89, 83, 8, 10);

  stroke(outline);
  ellipse(85, 78, 8, 10);
  noStroke();
  ellipse(86, 78, 8, 10);


  fill(lightPurple);
  ellipse(butterflyX + 5, butterflyY + 13, 9, 12);
  ellipse(butterflyX -5, butterflyY + 13, 9, 12);
  ellipse(butterflyX + 5, butterflyY + 25, 7, 9);
  ellipse(butterflyX - 5, butterflyY + 25, 7, 9);

  

}








