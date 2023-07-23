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
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  drawOuterPetals();
  drawMiddlePetals();
  drawInnerPetals();
}


function drawInnerPetals(){

  let centreX = 100;
  let centreY = 50;
  let petalWidth = 25;
  let topPetalHeight = 30;
  let bottomPetalHeight = topPetalHeight + 45;
  let lightPink = color(250, 197, 220);
  let innerOutline = color(245, 140, 204);

  //Draws inner petals
  fill(lightPink);
  stroke(innerOutline);
  strokeWeight(1.7);
  rect(centreX, centreY, petalWidth, topPetalHeight, 20, 5, 30, 5); //first inner petal
  rect(centreX, bottomPetalHeight, petalWidth, topPetalHeight, 5, 30, 5, 20); //second inner petal
  rect(centreX - petalWidth, bottomPetalHeight, petalWidth, topPetalHeight, 30, 5, 20, 5); //third inner petal
  rect(centreX - petalWidth, centreY, petalWidth, topPetalHeight, 5, 20, 5, 30); //last inner petal

}

function drawMiddlePetals(){
  let middlePink = color(232, 97, 158);
  let middleOutline = color(189, 66, 121);

  //Draws middle petals
  let upCentreX = 100;
  let upCentreY = 30;
  let mPetalWidth = 30;
  let mPetalHeight = 30;
  fill(middlePink);
  stroke(middleOutline);
  strokeWeight(1.5);

  rect(upCentreX + 5, upCentreY + 2, mPetalWidth, mPetalHeight, 20, 1, 30, 1); //first middle petal (top right)
  rect(upCentreX, upCentreY + 25, mPetalWidth + 10, mPetalHeight, 1, 30, 30, 1); //second middle petal (right)
  rect(upCentreX + 5, upCentreY + 55, mPetalWidth , mPetalHeight, 1, 30, 1, 30); //third middle petal (bottom right)
  rect(upCentreX - 15, upCentreY + 55, mPetalWidth , mPetalHeight, 1, 1, 30, 30); //fourth middle petal (bottom)
  rect(upCentreX - 35, upCentreY + 55, mPetalWidth , mPetalHeight, 30, 1, 30, 1); //fifth middle petal (bottom left)
  rect(upCentreX - 40, upCentreY + 25, mPetalWidth + 10, mPetalHeight, 30, 1, 1, 30); //sixth middle petal (left)
  rect(upCentreX - 35, upCentreY + 2, mPetalWidth, mPetalHeight, 1, 20, 1, 30); //seventh middle petal (top left)
  rect(upCentreX - 15, upCentreY, mPetalWidth, mPetalHeight, 30, 30, 1, 1); //last petal (top)



  

}

function drawOuterPetals(){
  let outerPink = color(219, 59, 107);
  let outerOutline = color(166, 30, 71);
  let outCentreX = 86;
  let outCentreY = 15;
  let oPetalW = 30;
  let oPetalH = 30;


  //Draws outer petals
  fill(outerPink);
  stroke(outerOutline);
  strokeWeight(1);

  rect(outCentreX, outCentreY, oPetalW, oPetalH, 30, 30, 1, 1); //top petal
  rect(outCentreX - 30, outCentreY + 2, oPetalW, oPetalH, 1, 30, 1, 30); //tl petal
  rect(outCentreX + 30, outCentreY + 2, oPetalW, oPetalH, 30, 1, 30, 1); //tr petal

  rect(outCentreX + 36, outCentreY + 28, oPetalW, oPetalH, 1, 30, 30, 1); //up right petal
  rect(outCentreX - 36, outCentreY + 28, oPetalW, oPetalH, 30, 30, 30, 30); //up left petal
  rect(outCentreX + 36, outCentreY + 57, oPetalW, oPetalH, 1, 30, 30, 1); //middle right petal
  rect(outCentreX - 36, outCentreY + 57, oPetalW, oPetalH, 30, 30, 30, 30); //up left petal

  rect(outCentreX - 30, outCentreY + 82, oPetalW, oPetalH, 30, 1, 30, 1); //bl petal
  rect(outCentreX, outCentreY + 85, oPetalW, oPetalH, 30, 30, 30, 30); //bottom petal
  rect(outCentreX + 28, outCentreY + 82, oPetalW, oPetalH, 1, 30, 1, 30); //br petal
}


