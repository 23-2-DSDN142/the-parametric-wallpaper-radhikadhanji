//your parameter variables go here!
let pinkMode = false;

//petal variables
let mPetalW  = 10;
let mPetalH = 10;
let centreX = 100;
let centreY = 150;
let petalWidth = 10;
let petalHeight = 15;
let leftX = 55;
let leftY = 140;
let rightX = 140;
let rightY = 140;


//frame variables
let frameHeight = 150;
let frameWidth = 100;

//butterfly variables
let butterflyX = 100;
let butterflyY = 70;
let wingWidth = 15;
let wingHeight = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 75;
}

function wallpaper_background() {
  if(pinkMode == true){
    background(85, 9, 102); //dark purple
  }
  else{
    background(23, 19, 10); //very dark dark brown
  }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
   
  drawFrame(centreX, centreX, frameWidth, frameHeight); //draws the frame

  drawMiddlePetals(centreX + 10, centreY - 20, mPetalW, mPetalH); //draws middle petals of all the flowers
  drawInnerPetals(centreX, centreY, petalWidth, petalHeight); //draws inner petals of all the flowers

  drawMiddlePetals(centreX - 35, centreY - 30, mPetalW, mPetalH); //draws middle petals of all the flowers
  drawInnerPetals(leftX, leftY, petalWidth, petalHeight); //left flower

  drawMiddlePetals(centreX + 50, centreY - 30, mPetalW, mPetalH); //draws middle petals of all the flowers
  drawInnerPetals(rightX, rightY, petalWidth, petalHeight); //right flower

  if(pinkMode == true){
    drawHeart(centreX, centreY);
  }
  else{
    drawButterfly(butterflyX, butterflyY, wingWidth, wingHeight); //draws the butterfly
  }

}


function drawInnerPetals(x, y, w, h){

  let bottomPetalY = y + 15;
  let darkBlue = color(62, 70, 230);
  let innerOutline1 = color(44, 51, 191);
  let lightPink = color(219, 83, 104); 
  let innerOutline2 = color(166, 48, 66);

  if(pinkMode == true){
    fill(lightPink);
    stroke(innerOutline2);
  }
  else{
    fill(darkBlue);
    stroke(innerOutline1);
  }

  //Draws inner petals
  strokeWeight(0.5);
  rect(x, y, w, h, 20, 5, 30, 5); //first inner petal
  rect(x, bottomPetalY, w, h, 5, 30, 5, 20); //second inner petal
  rect(x - 10, bottomPetalY, w, h, 30, 5, 20, 5); //third inner petal
  rect(x - 10, y, w, h, 5, 20, 5, 30); //last inner petal
  circle(x, y + 15, 7); //centre of the flower

}

function drawMiddlePetals(x, y, w, h){
  let middlePink = color(245, 171, 203); 
  let middleOutline2 = color(163, 72, 86);
  let lightBlue = color(51, 207, 255);
  let middleOutline1 = color(191, 40, 17);

  if(pinkMode == true){
    fill(middlePink)
    stroke(middleOutline2);
  }
  else{
    fill(lightBlue)
    stroke(middleOutline1);
  }

  strokeWeight(0.7);

  rect(x - 4, y + 15, w, h, 20, 1, 30, 1); //first middle petal (top right)
  rect(x - 2, y + 25, w, h + 5, 1, 30, 30, 1); //second middle petal (right)
  rect(x - 2, y + 41, w , h, 1, 30, 1, 30); //third middle petal (bottom right)
  rect(x - 15, y + 44, w , h, 1, 1, 30, 30); //fourth middle petal (bottom)
  rect(x - 28, y + 41, w , h, 30, 1, 30, 1); //fifth middle petal (bottom left)
  rect(x - 28, y + 25, w, h + 5, 30, 1, 1, 30); //sixth middle petal (left)
  rect(x - 25, y + 15, w, h, 1, 20, 1, 30); //seventh middle petal (top left)
  rect(x - 15, y + 15, w, h, 30, 30, 1, 1); //last petal (top)

}

function drawFrame(x, y, w, h){
  let frameColour = color(148, 149, 153); 
  let innerFrameColour = color(71,71, 74);
  let frameDetail = color(45, 46, 54);
  let gold = color(168, 102, 47);
  let blue = color(95, 204, 237);

  let pinkFrame = color(180, 149, 245);
  let innerPinkFrame = color(140, 75, 201);

  if(pinkMode == true){
    fill(innerPinkFrame);
  }
  else{
    fill(innerFrameColour);
  }
  noStroke();
  ellipse(x, y, w - 5, h - 5); //fills inside of the frame

  stroke(95, 204, 237, 100);
  strokeCap(SQUARE);
  strokeWeight(12);
  line(50, 90, 115, 25); 
  strokeWeight(2);
  line(50, 80, 100, 20); //inner highlights

  if(pinkMode == true){
    stroke(pinkFrame);
  }
  else{
    stroke(frameColour);
  }
  strokeWeight(8);
  noFill();
  ellipse(x, y, w, h); //creates the frame


  strokeWeight(0.6);
  stroke(frameDetail);
  ellipse(x, y, w + 7, h + 7); //details of the frame

  if(pinkMode == true){
    stroke(gold);
  }
  else{
    stroke(blue);
  }

  strokeWeight(1);
  noFill(40, 50, 140, 50);
  ellipse(x, y, w + 10, h + 10); //highlight of the frame
}

function drawButterfly(x, y, w, h){
  let butterflyColour = color(98, 54, 186);
  let outline = color(111, 172, 237);
  let lightPurple = color(154, 87, 179);

  fill(butterflyColour);
  stroke(outline);
  strokeWeight(1);
  rect(x, y, w, h, 45, 1, 45, 1); //top right
  rect(x - 15, y, w, h, 1, 45, 1, 45); //top left
  rect(x, y + 20, w -3, h -3, 1, 30, 1, 30); //bottom right
  rect(x - 12, y + 20, w - 3, h - 3, 30, 1, 30, 1); //bottom left

  ellipse(x + 12, y + 15, 8, 10);
  noStroke();
  ellipse(x + 11, y + 15, 8, 10);

  stroke(outline);
  ellipse(x + 15, y + 10, 8, 10);
  noStroke();
  ellipse(x + 14, y + 10, 8, 10);
  stroke(outline);

  ellipse(x - 12, y + 15, 8, 10);
  noStroke();
  ellipse(x - 11, y + 15, 8, 10);

  stroke(outline);
  ellipse(x - 15, y + 10, 8, 10);
  noStroke();
  ellipse(x - 14, y + 10, 8, 10); 


  fill(lightPurple);
  ellipse(x + 5, y + 13, 9, 12);
  ellipse(x -5, y + 13, 9, 12);
  ellipse(x + 5, y + 25, 7, 9);
  ellipse(x - 5, y + 25, 7, 9);
}

function drawHeart(x, y){
  let heartColour = color(255, 176, 194);
  let heartOutline = color(255, 143, 169);
  let heartHighlights = color(255, 237, 248);
  
  fill(heartColour);
  stroke(heartOutline);
  strokeWeight(2);
  
  beginShape();
  vertex(100, 90);
  vertex(90, 100);
  vertex(100, 110);
  vertex(110, 100);
  endShape(); //bottom of the heart

  noStroke();
  ellipse(107, 92, 15, 20);
  ellipse(93, 92, 15, 20); //sides of the heart

  fill(heartHighlights);
  ellipse(107, 88, 10, 7);
  ellipse(110, 95, 2, 2); //highlights on the heart



}








