// save this file as sketch.js
// Sketch One
var s = function( p ) { // p could be any variable name
  var maxParticles, particleBreakDistance, repelDist;
  var particles = [];
  var canvas;
  var pix;

  p.setup = function() {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    p.frameRate(60);
    maxParticles = 150;
    repelDist = p.max(p.width, p.height)/8;
    particleBreakDistance = p.max(p.width, p.height) / 50;
    while (particles.length < maxParticles) {
      obj = [p.createVector(p.random(p.width), p.random(p.height)), p.createVector(p.random(4) - 2, p.random(4) - 2)];
      particles.push(obj);
    }
  };
  p.drawParticles = function() {
    p.colorMode(p.HSB, 100);
      for (var i = 0; i < particles.length; i++) {
        var posi = particles[i][0];
        for (var j = i + 1; j < particles.length; j++) {
          var posj = particles[j][0];
          var dist = posi.dist(posj);
          if (dist <= particleBreakDistance) {
            p.strokeWeight(2-(dist/particleBreakDistance));
            p.stroke(p.mouseY/p.height * 60 + p.random(-(posi.x/p.width*20), posi.x/p.width*60),p.mouseX/p.width * 40+(posi.y/p.height*50), p.random(40, posi.y/p.height * 150),100 - 100*dist/particleBreakDistance);
                    p.line(posi.x, posi.y, posj.x, posj.y);
                }
            }
        }
        p.colorMode(p.RGB, 255);
        p.noFill();
        p.noStroke();

        var mousePos = p.createVector(p.mouseX, p.mouseY);

        for (var i = 0; i < particles.length; i++) {
            var pos = particles[i][0];
            var speed = particles[i][1];
            var randSize = 3 + p.random(4);
            p.ellipse(pos.x, pos.y, randSize, randSize);
            pos.add(speed);

            var distToMouse = mousePos.dist(pos);

            if (distToMouse < repelDist) {
                var repel = p.createVector(pos.x - mousePos.x, pos.y - mousePos.y);
                var distFrac = (repelDist - distToMouse) / repelDist
                repel.setMag(50 * distFrac * distFrac);
                pos.add(repel);
            }

            if (pos.x > p.width) {
                pos.x -= p.width;
                pos.y += p.random(p.height / 10) - p.height / 20;
            }
            else if (pos.x < 0) {
                pos.x += p.width;
                pos.y += p.random(p.height / 10) - p.height / 20;
            }

            if (pos.y > p.height) {
                pos.y -= p.height;
                pos.x += p.random(p.width / 10) - p.width / 20;
            }
            else if (pos.y < 0) {
                pos.y += p.height;
                pos.x += p.random(p.width / 10) - p.width / 20;
            }
        }

    }

  p.draw = function() {
    p.background(255, 225, 220, 50);
    p.drawParticles();
    particleBreakDistance = p.min(particleBreakDistance + 1, p.width / 12);
  };
  window.onresize = function(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.resize(w,h);
    width = w;
    height = h;
  };
};
var myp5 = new p5(s, 'artist');
//Sketch 2
var t = function(q){
  var canvas;
  var maxParticles, particleBreakDistance, repelDist;
  var particles = [];
  var randSize;
  var r = 100;
  var g = 100;
  var b = 100;

  q.setup = function() {
      canvas = q.createCanvas(window.innerWidth, window.innerHeight);
      q.frameRate(40);
      maxParticles = 150;
      repelDist = q.max(q.width, q.height)/8;
      particleBreakDistance = q.max(q.width, q.height) / 50;
      randSize = q.floor(q.random() * 26) + 35;

      while (particles.length < maxParticles) {
          obj = [q.createVector(q.random(q.width), q.random(q.height)), q.createVector(q.random(3) - 2, q.random(3) - 2)];
          particles.push(obj);
      }
  }

  q.drawParticles = function() {
      q.colorMode(q.RGB, 255);
      q.noStroke();
      // stroke(255, 255, 255);
      //strokeWeight(2);

      var mousePos = q.createVector(q.mouseX, q.mouseY);

      for (var i = 0; i < particles.length; i++) {
          var pos = particles[i][0];
          var speed = particles[i][1];
          if(q.frameCount % 20 == 0){
              randSize = q.floor(q.random() * 26) + 35;
          }
          q.fill(r+q.random(-50,100), g+q.random(-50,100), b+q.random(-50,100), q.random(0,60));
          q.ellipse(pos.x, pos.y, randSize + ((pos.x + q.mouseX)/q.random(100, 180)), randSize + ((pos.x + q.mouseX)/q.random(100, 180)));
          pos.add(speed);

          var distToMouse = mousePos.dist(pos);

          if (distToMouse < repelDist) {
              var repel = q.createVector(pos.x - mousePos.x, pos.y - mousePos.y);
              var distFrac = (repelDist - distToMouse) / repelDist
              repel.setMag(50 * distFrac * distFrac);
              pos.add(repel);
          }

          if (pos.x > q.width) {
              pos.x -= q.width;
              pos.y += q.random(q.height / 10) - q.height / 20;
          }
          else if (pos.x < 0) {
              pos.x += q.width;
              pos.y += q.random(q.height / 10) - q.height / 20;
          }

          if (pos.y > q.height) {
              pos.y -= q.height;
              pos.x += q.random(q.width / 10) - q.width / 20;
          }
          else if (pos.y < 0) {
              pos.y += q.height;
              pos.x += q.random(q.width / 10) - q.width / 20;
          }
      }

  }

  q.draw = function() {
    q.background(255, 225, 220);
    q.drawParticles();
    particleBreakDistance = q.min(particleBreakDistance + 1, q.width / 12);
      
  }﻿
  q.mousePressed =function(){
      r = q.random(255);
      g = q.random(255);
      b = q.random(255);

  }

  window.onresize = function(){
      var w = window.innerWidth;
      var h = window.innerHeight;
      canvas.resize(w,h);
      width = w;
      height = h;
  }
}
var myp5 = new p5(t, 'general');
var v = function(r){
  var inc = 0.1;
  var scl = 20;
  var cols, rows;
  var canvas;
  var particles =[];
  var flowfield = [];
  var zoff=0;

  r.setup = function(){
    canvas = r.createCanvas(window.innerWidth, window.innerHeight);
    cols = r.floor(r.width/scl);
    rows = r.floor(r.height/scl);
    r.background(255, 225, 220)
    flowfield = new Array(cols * rows);
    r.frameRate(30);

    for(var i = 0; i < 500; i++){
      particles[i] = new r.Particle();
    }
  }

  r.draw = function(){
    var yoff = r.mouseY;
    for(var y = 0; y < rows; y++){
      var xoff = r.mouseX;
      for(var x = 0; x < cols; x++){
        var index = (x + y * cols);
        flowfield[index] = v;
        var angle = r.noise(xoff, yoff,zoff)*r.TWO_PI*4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(5);
        xoff += inc;
        // stroke(0, 50);
        // push();
        // translate(x*scl, y*scl);
        // rotate(v.heading());
        // strokeWeight(1);
        // line(0,0,scl,0);
        // pop();
      }
      yoff +=inc;

      zoff +=0.0001;
    }
    for (var i = 0; i < particles.length; i++){
      particles[i].follow(flowfield);
      particles[i].edges();
      particles[i].show();
      particles[i].update();
    }
  }

  r.Particle = function(){
  this.pos = r.createVector(r.random(r.width), r.random(r.height));
  this.vel = r.createVector(0,0);
  this.acc = r.createVector(0,0);
  this.maxspeed = 3;

  this.prevPos = this.pos.copy();

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    if (this.vel.x == 0 && this.vel.y == 0){
      this.vel = r.createVector(1, r.random(2));
    }
  }

  this.follow = function(vectors){
    var x = r.floor(this.pos.x/scl);
    var y = r.floor(this.pos.y/scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.show = function(){
    r.stroke(138 + this.pos.x/r.width*100, 255 - this.pos.y/r.height*100, 255 - r.mouseX/r.width*100, 50);
    r.strokeWeight(1);
    r.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }
  this.updatePrev = function(){
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function(){
    if (this.pos.x > r.width) {
      this.pos.x = r.random(r.width);
      this.updatePrev();

    }
    if (this.pos.x < 0) {
      this.pos.x = r.random(r.width);
      this.updatePrev();
    }
    if (this.pos.y > r.height) {
      this.pos.y = r.random(r.height);
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = r.random(r.height);
      this.updatePrev();
    }
  }
    r.mousePressed =function(){
      r.background(255, 225, 220);


  }
}

  window.onresize = function(){
      var w = window.innerWidth;
      var h = window.innerHeight;
      canvas.resize(w,h);
      width = w;
      height = h;
  }
}
var myp5 = new p5(v, 'engineer')
var w = function(a){
  // RGB color variables
  let r = 0;
  let g = 0;
  let b = 0;

  a.setup = function() { 
    a.createCanvas(window.innerWidth, window.innerHeight);
    a.background(255, 225, 220);
    //setTimeout color change function
    setTimeout(a.rChange, 450);
    setTimeout(a.gChange, 450);
    setTimeout(a.bChange, 450);
    a.fill(0, 102, 153);
  } 
  // spray effect
  // TO DO
  // change squared spray to radial circle spray
  a.draw =function() { 
    a.background(255, 225, 220, 50);
      for(var i = 0; i <= 2000; i++){
        let offsetX = a.random(0,90) * a.cos(a.random(a.TWO_PI));
        let offsetY = a.random(0,200) * a.sin(a.random(a.PI));
        let sizeX = a.random(0.2, 1,5);
        let sizeY = a.random(0.2, 1,5);
        a.fill(a.random(255),a.random(255),a.random(255));
        a.noStroke();
        a.rect(a.mouseX + offsetX, a.mouseY + offsetY, sizeX, sizeY);
      }
    }
  }  

var myp5 = new p5(w, 'student')
