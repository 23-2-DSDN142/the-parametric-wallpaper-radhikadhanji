//your parameter variables go here!
let pinkMode = false; //switches on and off to pink mode

//petal variables
let mPetalW  = 10; //middle petal width 
let mPetalH = 10; //middle petal height 
let centreX = 100; //x pos of centre petals 
let centreY = 150; //y pos of centre petals 
let petalWidth = 10; //inner petal width 
let petalHeight = 15; //inner petal height 
let leftX = 55; //x pos of left petals 
let leftY = 140; //y pos of left petals 
let rightX = 140; //x pos of right petals
let rightY = 140; //y pos of right petals 


//frame variables
let frameHeight = 150; 
let frameWidth = 100; //100

//butterfly variables
let butterflyX = 100; //100
let butterflyY = 70; //70
let wingWidth = 15; //15
let wingHeight = 20; //20


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
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
    drawHeart(centreX, centreY); //draws a heart
  }
  else{
    drawButterfly(butterflyX, butterflyY, wingWidth, wingHeight); //draws the butterfly
  }

}


function drawInnerPetals(x, y, w, h){

  let bottomPetalY = y + 15; //y pos of the bottom petals
  let darkBlue = color(62, 70, 230); //colours for normal mode
  let innerOutline1 = color(44, 51, 191);
  let lightPink = color(219, 83, 104); //colours for pink mode
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
  let middlePink = color(245, 171, 203); //colours for pink mode
  let middleOutline2 = color(163, 72, 86);
  let lightBlue = color(51, 207, 255); //colours for normal mode
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
  let innerFrameColour = color(42, 42, 48); 
  let frameDetail = color(45, 46, 54);
  let blue = color(95, 204, 237); //for highlight around whole frame
  //colours for pink mode
  let pinkFrame = color(180, 149, 245); 
  let innerPinkFrame = color(140, 75, 201);
  let gold = color(255, 204, 153); //highlight around whole frame
  let lightGold = color(255, 245, 235); //for frame details

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
  line(50, 80, 100, 20); //glass-like effect on the inside of the frame

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
  ellipse(x, y, w + 7, h + 7); //outside ridge of the frame

  
  strokeWeight(1.5);
  strokeCap(ROUND);
  if(pinkMode == true){
    stroke(lightGold);
  }
  else{
    stroke(frameDetail);
  }
  bezier(55, 75, x - 60, y - 30, 65, 120, 48, 120);
  bezier(50, 121, x - 60, y + 13, 55, 120, 60, 139); //left side
  bezier(145, 75, x + 60, y - 35, 138, 120, 151, 118); 
  bezier(150, 120, x + 60, y, 110, 190, 150, 139); //creates all the frame etchings
  //right side

  if(pinkMode == true){
    stroke(gold);
  }
  else{
    stroke(blue);
  }
  strokeWeight(1);
  noFill(40, 50, 140, 50);
  ellipse(x, y, w + 10, h + 10); //highlight of the frame outside the edge
}

function drawButterfly(x, y, w, h){
  let butterflyColour = color(98, 54, 186);
  let outline = color(111, 172, 237);
  let lightPurple = color(154, 87, 179); //butterfly markings

  fill(butterflyColour);
  stroke(outline);
  strokeWeight(1);
  rect(x, y, w, h, 45, 1, 45, 1); //top right wing
  rect(x - 15, y, w, h, 1, 45, 1, 45); //top left wing
  rect(x, y + 20, w -3, h -3, 1, 30, 1, 30); //bottom right wing
  rect(x - 12, y + 20, w - 3, h - 3, 30, 1, 30, 1); //bottom left wing

  ellipse(x + 12, y + 15, 8, 10);
  noStroke();
  ellipse(x + 11, y + 15, 8, 10); //defines bottom curve in right wing

  stroke(outline);
  ellipse(x + 15, y + 10, 8, 10);
  noStroke();
  ellipse(x + 14, y + 10, 8, 10); //defines top curve in right wing
  stroke(outline);

  ellipse(x - 12, y + 15, 8, 10); 
  noStroke();
  ellipse(x - 11, y + 15, 8, 10); //defines bottom curve in left wing

  stroke(outline);
  ellipse(x - 15, y + 10, 8, 10);
  noStroke();
  ellipse(x - 14, y + 10, 8, 10);  //defines top curve in left wing

  fill(lightPurple);
  ellipse(x + 5, y + 13, 9, 12);
  ellipse(x -5, y + 13, 9, 12);
  ellipse(x + 5, y + 25, 7, 9);
  ellipse(x - 5, y + 25, 7, 9); //circular markings of the butterfly
}

function drawHeart(){
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








