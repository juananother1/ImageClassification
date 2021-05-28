let classifier;

let video;

function modelReady() {
  console.log("model ready");
}

function videoReady() {
  console.log("video ready");
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  
  createDiv("Label: " + results[0].label);
  createDiv("Confidence: " + nf(results[0].confidence, 0, 2));
}

function preload() {
  classifier = ml5.imageClassifier("MobileNet", video, modelReady);
  video = createCapture(VIDEO, videoReady);
  classifier.classify(video, gotResult);
  createCanvas(400, 400);
}