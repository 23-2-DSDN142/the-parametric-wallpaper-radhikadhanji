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




}


function drawInnerPetals(){

  let centreX = 100; //this was 100
  let centreY = 150;
  let bottomPetalY = centreY + 15;
  let petalWidth = 10; //this was 25
  let topPetalHeight = 15; //this was 30
  let lightPink = color(154, 252, 157); //this was 250, 197, 220
  let innerOutline = color(110, 219, 130);
  let leftX = 55;
  let leftY = 140;
  let bottomLeftY = leftY + 15;

  //Draws inner petals
  fill(lightPink);
  stroke(innerOutline);
  strokeWeight(1.7);
  rect(centreX, centreY, petalWidth, topPetalHeight, 20, 5, 30, 5); //first inner petal
  rect(centreX, bottomPetalY, petalWidth, topPetalHeight, 5, 30, 5, 20); //second inner petal
  rect(centreX - 10, bottomPetalY, petalWidth, topPetalHeight, 30, 5, 20, 5); //third inner petal
  rect(centreX - 10, centreY, petalWidth, topPetalHeight, 5, 20, 5, 30); //last inner petal

  rect(leftX, leftY, petalWidth, topPetalHeight, 20, 5, 30, 5); //first inner petal
  rect(leftX, bottomLeftY, petalWidth, topPetalHeight, 5, 30, 5, 20); //second inner petal
  rect(leftX - 10, bottomLeftY, petalWidth, topPetalHeight, 30, 5, 20, 5); //third inner petal
  rect(leftX - 10, leftY, petalWidth, topPetalHeight, 5, 20, 5, 30); //last inner petal


}

function drawMiddlePetals(){
  let middlePink = color(97, 201, 116); //this was 232, 97, 158
  let middleOutline = color(61, 168, 80);

  //Draws middle petals
  let upCentreX = 110; //this was 100
  let upCentreY = 130;
  let mPetalWidth = 10; //this was 30
  let mPetalHeight = 10; //this was 30
  let leftX = 65;
  let leftY = 120;
  fill(middlePink);
  stroke(middleOutline);
  strokeWeight(1.5);

  rect(upCentreX - 10, upCentreY + 15, mPetalWidth, mPetalHeight, 20, 1, 30, 1); //first middle petal (top right)
  rect(upCentreX - 6, upCentreY + 25, mPetalWidth, mPetalHeight + 5, 1, 30, 30, 1); //second middle petal (right)
  rect(upCentreX, upCentreY + 60, mPetalWidth , mPetalHeight, 1, 30, 1, 30); //third middle petal (bottom right)
  rect(upCentreX - 15, upCentreY + 60, mPetalWidth , mPetalHeight, 1, 1, 30, 30); //fourth middle petal (bottom)
  rect(upCentreX - 30, upCentreY + 60, mPetalWidth , mPetalHeight, 30, 1, 30, 1); //fifth middle petal (bottom left)
  rect(upCentreX - 30, upCentreY + 25, mPetalWidth, mPetalHeight + 5, 30, 1, 1, 30); //sixth middle petal (left)
  rect(upCentreX - 25, upCentreY + 15, mPetalWidth, mPetalHeight, 1, 20, 1, 30); //seventh middle petal (top left)
  rect(upCentreX - 15, upCentreY + 15, mPetalWidth, mPetalHeight, 30, 30, 1, 1); //last petal (top)

  rect(leftX, leftY + 10, mPetalWidth, mPetalHeight, 20, 1, 30, 1); //first middle petal (top right)
  rect(leftX - 6, leftY + 25, mPetalWidth + 10, mPetalHeight + 15, 1, 30, 30, 1); //second middle petal (right)
  rect(leftX, leftY + 55, mPetalWidth , mPetalHeight, 1, 30, 1, 30); //third middle petal (bottom right)
  rect(leftX - 15, leftY + 55, mPetalWidth , mPetalHeight, 1, 1, 30, 30); //fourth middle petal (bottom)
  rect(leftX - 30, leftY + 55, mPetalWidth , mPetalHeight, 30, 1, 30, 1); //fifth middle petal (bottom left)
  rect(leftX - 32, leftY + 25, mPetalWidth + 10, mPetalHeight + 15, 30, 1, 1, 30); //sixth middle petal (left)
  rect(leftX - 30, leftY + 10, mPetalWidth, mPetalHeight, 1, 20, 1, 30); //seventh middle petal (top left)
  rect(leftX - 15, leftY + 10, mPetalWidth, mPetalHeight, 30, 30, 1, 1); //last petal (top)
}

function drawFrame(){
  let frameHeight = 150;
  let frameWidth = 100;
  let frameColour = color(77, 53, 50); 
  let innerFrameColour = color(82, 80, 80);
  let gold = color(168, 102, 47);

  stroke(frameColour);
  strokeWeight(8);
  noFill();
  ellipse(100, 100, frameWidth, frameHeight);

  strokeWeight(3);
  bezier(50, 77, 20, 130, 20, 75, 50, 130);
  bezier(150, 120, 225, 100, 120, 70, 150, 75);


  strokeWeight(1);
  stroke(gold);
  bezier(50, 77, 20, 130, 20, 75, 50, 130);

  fill(innerFrameColour);
  noStroke();
  ellipse(100, 100, frameWidth - 5, frameHeight - 5);
}

function drawButterfly(){
  let butterflyTotalHeight = 75;
  let butterflyTotalWidth = 50;
  let butterflyWingHeight = butterflyTotalHeight - 15;
  let butterflyWingLength = butterflyTotalWidth/2;
  let butterflyColour = color(199, 74, 224);


}








