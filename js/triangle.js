var canvas;

var maxParticles, particleBreakDistance, repelDist;
var particles = [];


function preload(){
    img = loadImage("picture.jpg");
}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    img.resize(window.innerWidth,window.innerHeight);
    frameRate(60);
    maxParticles = 150;
    repelDist = max(width, height)/8;
    particleBreakDistance = max(width, height) / 50;
    while (particles.length < maxParticles) {
        obj = [createVector(random(width), random(height)), createVector(random(4) - 2, random(4) - 2)];
        particles.push(obj);
    }
}

function drawParticles() {
    pix = img.get(mouseX, mouseY);
    colorMode(RGB, 100);
    for (var i = 0; i < particles.length; i++) {
        var posi = particles[i][0];
        for (var j = i + 1; j < particles.length; j++) {
            var posj = particles[j][0];
            var dist = posi.dist(posj);
            if (dist <= particleBreakDistance) {
                strokeWeight(2-(dist/particleBreakDistance));
                stroke(pix[1]/255*100+40*posi.x/width, pix[2]/255*100, pix[3]/255*100-30*posi.y/height, 255 - 255*dist/particleBreakDistance);
                line(posi.x, posi.y, posj.x, posj.y);
            }
        }
    }
    colorMode(RGB, 255);
    noFill();
    noStroke();

    var mousePos = createVector(mouseX, mouseY);

    for (var i = 0; i < particles.length; i++) {
        var pos = particles[i][0];
        var speed = particles[i][1];
        var randSize = 3 + random(4);
        ellipse(pos.x, pos.y, randSize, randSize);
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

    background(255, 225, 220, 50);
    drawParticles();
    particleBreakDistance = min(particleBreakDistance + 1, width / 12);
    
}﻿

window.onresize = function(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    img.resize(w, h);
    canvas.size(w,h);
    width = w;
    height = h;
}