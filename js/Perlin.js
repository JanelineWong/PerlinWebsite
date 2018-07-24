
//general sketch
var s = function(gen){

	var inc = 0.1;
	var scl = 20;
	var cols, rows;
	var canvas;
	var particles =[];
	var flowfield = [];
	var zoff=0;

	gen.setup = function(){
		canvas = gen.createCanvas(window.innerWidth, window.innerHeight);
		canvas.parent('general');
		cols = gen.floor(gen.width/scl);
		rows = gen.floor(gen.height/scl);
		gen.background(255, 225, 220, 50)
		flowfield = new Array(cols * rows);
		gen.frameRate(30);

		for(var i = 0; i < 500; i++){
			gen.particles[i] = new Particle();
		}
	}

	gen.draw = function(){
		var yoff = mouseY;
		for(var y = 0; y < rows; y++){
			var xoff = mouseX;
			for(var x = 0; x < cols; x++){
				var index = (x + y * cols);
				flowfield[index] = v;
				var angle = noise(xoff, yoff,zoff)*TWO_PI*4;
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

	window.onresize = function(){
	    var w = window.innerWidth;
	    var h = window.innerHeight;
	    canvas.size(w,h);
	    width = w;
	    height = h;
	}
}
var myp5 = new p5(s, 'general');
