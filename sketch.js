function setup() {
    createCanvas(400,269);
    background(245,201,35);
    //hair: 245,201,35
    //skin: 249,216,207
    //white bar: 220,219,215
    //black: 0,0,0 white: 255,255,255

    //skin
    noStroke();
    fill(249,216,207);
    ellipse(410,140,200,300);

    fill(245,201,35);
    ellipse(290,300,150,200);

    //outline - right
    noFill();
    stroke(0);
    strokeWeight(10);
    curve(630, 700, 320, 210, 380, -5, height/1, width/1);
    curve(700, 790, 320, 210, 380, -5, height/1, width/1);
    curve(780, 800, 320, 210, 370, -5, height/1, width/1);
    curve(780, 860, 320, 210, 370, -5, height/1, width/1);
    curve(800, 750, 320, 210, 350, -5, height/1, width/1);
        //bottom part
        curve(50, 150, 320, 210, 400, 469, height/1, width/1);

    //small hair lines
    strokeWeight(5.5);
    curve(630, 700, 290, 190, 335, -5, height/1, width/1);
    curve(630, 700, 270, 175, 330, -5, height/1, width/1);
    curve(600, 700, 250, 160, 325, -10, height/1, width/1);
    curve(500, 700, 230, 135, 330, -10, height/1, width/1);

    //outline - middle
    noFill();
    stroke(0);
    strokeWeight(10);
    curve(630, 720, 200, 269, 270, -5, height/1, width/1);
    curve(700, 810, 200, 269, 270, -5, height/1, width/1);
    curve(780, 820, 200, 269, 260, -5, height/1, width/1);
    curve(780, 880, 200, 269, 250, -5, height/1, width/1);
    curve(800, 770, 200, 269, 240, -5, height/1, width/1);

    //smaller outline middle
    strokeWeight(11);
    curve(500, 700, 100, 300, 200, -6, height/1, width/1);

    //small hair lines left
    strokeWeight(8);
    curve(160, 550, 70, 215, 195, -6, height/1, width/1);
    curve(120, 550, 55, 200, 180, -6, height/1, width/1);
    curve(120, 550, 40, 185, 165, -6, height/1, width/1);
    curve(100, 550, 25, 165, 155, -6, height/1, width/1);

    //thick outline left
    strokeWeight(19);
    curve(100, 100, -20, 160, 117, -10, height/1, width/1);
    strokeWeight(25);
    line(-7, 30, 15, -5);

    //bottom hair lines
    strokeWeight(6);
    curve(120, 100, 305, 220, 330, 350, height/1, width/1);
    curve(120, 100, 310, 226, 300, 350, height/1, width/1);
    curve(120, 100, 310, 226, 293, 350, height/1, width/1);
    strokeWeight(6);
    curve(270, 100, 300, 210, 285, 300, height/1, width/1);
    curve(270, 100, 300, 210, 290, 300, height/1, width/1);
    strokeWeight(6);
    curve(270, 100, 280, 230, 265, 300, height/1, width/1);
    curve(270, 100, 268, 235, 253, 300, height/1, width/1);

    //curve on far right in skin
    strokeWeight(5.5);
    line(380, 150, 500, 110);

    //horizontal lines
    stroke(220,219,215);
    strokeWeight(10);
    line(0,15,400,15);

    stroke(0);
    line(0, 60, 400, 60);
    strokeWeight(6);
    line(0, 240, 250, 240);
    line(0, 255, 240, 255);
    line(0, 264, 238, 264);

}

function draw() {

}