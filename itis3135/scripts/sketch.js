function setup() { 
    createCanvas(600, 400, WEBGL);
    angleMode(DEGREES);
    strokeWeight(8);
    noFill();
    stroke(32, 8, 64);
}

function draw() {
    background(49, 107, 115);
    orbitControl();

    for (let zAngle = 0; zAngle<180; zAngle += 30){
        for (let xAngle = 0; xAngle < 360; xAngle += 30){
            push();

            rotateZ(zAngle);
            rotateX(xAngle);

            translate(0, 400, 0);
            stroke("cyan");
            sphere();
            pop();
        }
    }
}


