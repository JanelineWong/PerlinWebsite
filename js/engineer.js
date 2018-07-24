var canvas;

var maxParticles, particleBreakDistance, repelDist;
var particles = [];
var randSize;
var r = 100;
var g = 100;
var b = 100;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('engineer');
    frameRate(40);
    maxParticles = 150;
    repelDist = max(width, height)/8;
    particleBreakDistance = max(width, height) / 50;
    randSize = Math.floor(Math.random() * 26) + 35;

    while (particles.length < maxParticles) {
        obj = [createVector(random(width), random(height)), createVector(random(3) - 2, random(3) - 2)];
        particles.push(obj);
    }
}

function drawParticles() {
    colorMode(RGB, 255);
    noStroke();
    // stroke(255, 255, 255);
    //strokeWeight(2);

    var mousePos = createVector(mouseX, mouseY);

    for (var i = 0; i < particles.length; i++) {
        var pos = particles[i][0];
        var speed = particles[i][1];
        if(frameCount % 20 == 0){
            randSize = Math.floor(Math.random() * 26) + 35;
        }
        fill(r+random(-50,100), g+random(-50,100), b+random(-50,100), random(0,60));
        ellipse(pos.x, pos.y, randSize + ((pos.x + mouseX)/random(100, 180)), randSize + ((pos.x + mouseX)/random(100, 180)));
        pos.add(speed);

        var distToMouse = mousePos.dist(pos);

        if (distToMouse < repelDist) {
            var repel = createVector(pos.x - mousePos.x, pos.y - mousePos.y);
            var distFrac = (repelDist - distToMouse) / repelDist
            repel.setMag(50 * distFrac * distFrac);
            pos.add(repel);
        }

        if (pos.x > width) {
            pos.x -= width;
            pos.y += random(height / 10) - height / 20;
        }
        else if (pos.x < 0) {
            pos.x += width;
            pos.y += random(height / 10) - height / 20;
        }

        if (pos.y > height) {
            pos.y -= height;
            pos.x += random(width / 10) - width / 20;
        }
        else if (pos.y < 0) {
            pos.y += height;
            pos.x += random(width / 10) - width / 20;
        }
    }

}

function draw() {

    background(255, 225, 220);
    drawParticles();
    particleBreakDistance = min(particleBreakDistance + 1, width / 12);
    
}﻿
function mouseClicked(){
    r = random(255);
    g = random(255);
    b = random(255);

}

window.onresize = function(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.size(w,h);
    width = w;
    height = h;
}