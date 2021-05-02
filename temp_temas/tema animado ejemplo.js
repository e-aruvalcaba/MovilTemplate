(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"tema animado ejemplo_atlas_1", frames: [[0,0,1202,998],[893,1000,77,41],[717,1000,174,174],[0,1472,1291,152],[0,1000,715,470]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["tema animado ejemplo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["tema animado ejemplo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["tema animado ejemplo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1303,2243);


(lib.CachedBmp_1 = function() {
	this.initialize(ss["tema animado ejemplo_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["tema animado ejemplo_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Rentabilidad", "bold 40px 'Lato'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 50;
	this.text.lineWidth = 430;
	this.text.parent = this;
	this.text.setTransform(305.65,364.4);

	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,601,499), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Lorem ipsum dolor sit amet", "bold 32px 'Lato'");
	this.text.lineHeight = 40;
	this.text.lineWidth = 596;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.text_1 = new cjs.Text("Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", "32px 'Lato'");
	this.text_1.lineHeight = 40;
	this.text_1.lineWidth = 596;
	this.text_1.parent = this;
	this.text_1.setTransform(2,60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,599.7,405.9), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(0,0,0.841,0.8492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,601.4,399.2), null);


(lib.flecha_negra_cursor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.518)").s().p("AARCBQgNAAgNgGQgMgIgHgJIglg4IgdgtQgDgDABgEQACgEAEgDQAEgDAEAAIACAAQAEAAACAEIAdArQADAFAGgCQAGgBAAgHIAAiSQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFIAAB0QAAAEACACQACACADAAQADAAACgCQADgDAAgDIAAgiQADgCADAAQAIAAADAIIAAAeQAAAEADACQACACADAAQAEAAACgCQACgDAAgDIAAgcQAEgDAEAAQAEAAADACQADACABAFIAAAaQAAADADACQACACADABQADAAADgDQACgCAAgDIAAgYQACgCAFAAQAFAAADADQADAEAAAFIAABQIABAAIAAABQAAAXgRASQgRAPgXAAg");
	this.shape.setTransform(2.1357,14.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARCSQgRAAgPgJQgRgIgJgOIhDhlQgGgKACgKQAEgKAJgHQAKgGALABQAMACAGAKIANAUIAAh4QAAgLAJgJQAJgJALAAQAMAAAHAJQAJAJAAALIAABBIAHgBQANAAAIALQAGgEAHAAQAPAAAIAMQAFgDAHAAQAMAAAIAIQAHAJAAAMIAABQQAAAegWAWQgVAVgeAAgAhagJQgEADgCAEQgBAEADADIAdAtIAlA4QAHAKAMAHQANAHANAAIAXAAQAXAAARgQQARgRAAgXIAAgCIgBAAIAAhQQAAgFgDgDQgDgEgFAAQgFAAgCACIAAAYQAAADgCACQgDADgDAAQgDAAgCgCQgDgDAAgDIAAgaQgBgEgDgCQgDgDgEAAQgEAAgEADIAAAcQAAADgCADQgCACgEAAQgDAAgCgCQgDgCAAgEIAAgeQgDgIgIAAQgDAAgDACIAAAiQAAADgDADQgCACgDAAQgDAAgCgCQgCgCAAgEIAAh0QAAgFgEgDQgDgEgGAAQgFAAgDAEQgEADAAAFIAACTQAAAGgGACQgGABgDgFIgdgrQgCgDgEgBIgCAAQgEAAgEADg");
	this.shape_1.setTransform(2.1132,14.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flecha_negra_cursor, new cjs.Rectangle(-9.2,-0.1,22.7,29.1), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(20.55,10.6,0.5,0.5);

	this.instance_1 = new lib.flecha_negra_cursor();
	this.instance_1.setTransform(52.7,45.55,1.9469,1.9469,0,0,0,7.1,11.2);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.text = new cjs.Text("Haz clic en cada tarjeta", "30px 'Lato'");
	this.text.lineHeight = 38;
	this.text.lineWidth = 430;
	this.text.parent = this;
	this.text.setTransform(95.8,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,527.7,87.1), null);


// stage content:
(lib.temaanimadoejemplo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [40];
	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-2,21.55,0.5,0.5);

	this.text = new cjs.Text("LOGO", "43px 'Lato'", "#FFFFFF");
	this.text.lineHeight = 54;
	this.text.lineWidth = 190;
	this.text.parent = this;
	this.text.setTransform(11.3,9.6);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-1.2,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).wait(41));

	// Layer_5
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(320.5,1336.1,1,1,0,0,0,300.5,249.5);
	this.instance_2.alpha = 0.0117;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({y:1275.1,alpha:1},9,cjs.Ease.get(1)).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(307.45,1035.8,1,1,0,0,0,263.8,43.6);
	this.instance_3.alpha = 0.0117;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({y:974.8,alpha:1},9,cjs.Ease.get(1)).wait(8));

	// Layer_3
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(319.9,773.8,1,1,0,0,0,299.9,202.9);
	this.instance_4.alpha = 0.0117;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({y:712.8,alpha:1},9,cjs.Ease.get(1)).wait(14));

	// Layer_2
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(319.7,351.6,1,1,0,0,0,300.7,199.6);
	this.instance_5.alpha = 0.0117;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({y:290.6,alpha:1},9,cjs.Ease.get(1)).wait(20));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("EgfCA5jMAAAhzFMA+FAAAMAAABzFg");
	this.shape.setTransform(320.1722,799.9725,1.6107,2.1719);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(41));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(318,800,331.5,800);
// library properties:
lib.properties = {
	id: 'A1090DD960375F4694AD2DD571A85E5A',
	width: 640,
	height: 1600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_8.png?1612307246111", id:"CachedBmp_8"},
		{src:"images/tema animado ejemplo_atlas_1.png?1612307246087", id:"tema animado ejemplo_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A1090DD960375F4694AD2DD571A85E5A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;