let classifier;

let img;

function modelReady() {
	console.log('Model ready');
	classifier.classify(img, gotResults);
}

function gotResults(error, results) {
	if (error) {
		console.error(error);
	}
	else {
		console.log(resuts);
	}
}

function imageReady() {
	image(img, 0, 0, width, height)
}

function setup() {
	createCanvas(640, 480);
	img = loadImage('images/paper.jpg', imageReady)
	img.hide();
	background(0);

	classifier = ml5.imageClassifier('MobileNet', modelReady);
}



let classifier;

let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/download.jpg');
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, gotResult);
  image(img, 0, 0, width, height);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  createDiv('Label: ' + results[0].label);
  createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
}


