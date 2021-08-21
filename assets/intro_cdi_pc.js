(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#777777").s().p("AguFoQgFAAgEgEQgEgDAAgFIAAq3QAAgFAEgDQAEgEAFAAIBdAAQAGAAADAEQAEADAAAFIAAK3QAAAFgEADQgDAEgGAAg");
	this.shape.setTransform(144.1,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#777777").s().p("AkZFoQgFAAgEgEQgEgEAAgFIAAq2QAAgEAEgEQAEgEAFAAICpAAQDOAABkBtQBlBuAACMQgBCNhpBtIABAAQhnBujGAAgAitDxQBiAAAzgKIABAAQAxgJAvgeQAsgfAbgyIAAABQAbgyAAg+QAAhNgrg7Qgqg/g8gVQg9gVhnAAIgjAAg");
	this.shape_1.setTransform(100,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#777777").s().p("Ai/EQIAAgBQh3hyAAieQAAidB1hwQB1hwCiAAQBpABBwAuQADACADAEQABACAAAEIAABrQAAADgCAEQgDAEgEABQgEABgEgCQhvg1haAAQh1gBhPBMIAAgBQhOBLgBBtQAABuBRBLQBTBJB5AAQBaAABkg4QAEgCAFAAQADABAEADQACADAAAFIAABsQAAAEgBADIgFAEQhkAzhvABQikgBh4hug");
	this.shape_2.setTransform(31.1,38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,150,76.5), null);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5962E").s().p("Ag6A7QgYgZAAgiQAAgiAYgYQAYgYAiAAQAjAAAYAYQAYAYAAAiQAAAigYAZQgYAYgjAAQgiAAgYgYg");
	this.shape.setTransform(25.7,25.7,3.097,3.097);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,51.4,51.4), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDBF30").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");
	this.shape.setTransform(35,35,3.097,3.097);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,70,70), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDBF30","#F69E2E"],[0,1],-26.4,-28.7,26.9,28.7).s().p("AAjBrQg1hchrgsQiYgzi9AFIGAl7QgODfBMCCQA1BbBpAsQCYAzCxgOIgIACIlkF+QAHjchLiAg");
	this.shape.setTransform(78.9,78.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F69E2E").s().p("AhQBRQghgiAAgvQAAguAhgiQAighAuAAQAvAAAhAhQAiAiAAAuQAAAvgiAiQghAhgvAAQguAAgighg");
	this.shape_1.setTransform(124.3,121,3.097,3.097);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDBF30").s().p("AhQBRQghgiAAgvQAAguAhgiQAighAuAAQAvAAAhAhQAiAiAAAuQAAAvgiAiQghAhgvAAQguAAgighg");
	this.shape_2.setTransform(35.3,35.3,3.097,3.097);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,159.7,156.3), null);


(lib.logoanimado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Capa 4
	this.instance = new lib.Símbolo2();
	this.instance.parent = this;
	this.instance.setTransform(124.1,35.7,0.04,0.04,0,0,0,35,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(21));

	// Capa 3
	this.instance_1 = new lib.Símbolo3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.5,121.3,0.3,0.3,0,0,0,25.7,25.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(19));

	// Capa 2
	this.instance_2 = new lib.Símbolo1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,78.1,0.03,0.03,9.8,0,0,80.3,78.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({regX:79.8,regY:78.1,scaleX:1,scaleY:1,rotation:0,x:79.8},10,cjs.Ease.get(1)).wait(17));

	// letras cdi
	this.instance_3 = new lib.Símbolo4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(232.2,76.5,1,1,0,0,0,75,38.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({x:252.2,alpha:1},8,cjs.Ease.get(1)).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.7,34.3,2.8,2.8);


// stage content:
(lib.intro_cdi_pc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 3
	this.text = new cjs.Text("CDI", "53px 'Tw Cen MT'", "#FDBF30");
	this.text.textAlign = "center";
	this.text.lineHeight = 60;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(1329.4,311.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// logo animado
	this.instance = new lib.logoanimado();
	this.instance.parent = this;
	this.instance.setTransform(557,314.4,1,1,0,0,0,163.6,78.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1086.1,608,858.3,102.8);
// library properties:
lib.properties = {
	width: 1140,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;