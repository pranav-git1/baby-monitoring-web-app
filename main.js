objects = [];
status = "";
video_status = "";

function preload() {
    alarm = loadSound("alarm.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video_status = true;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw() {
    console.log(objects[0]);
    if (video_status == true) {
        image(video, 0, 0, 400, 400);
        if (objects[0] == "person") {
            document.getElementById("result").innerHTML = "Baby found";
            console.log("baby found");
        } else {
            document.getElementById("result").innerHTML = "Baby not found";
            console.log("baby not found");
        }
    }
}


function modelLoaded() {
    console.log("Model Loaded");
    objectDetector.detect(video, gotResults);
    status = true;
}

function gotResults(error, results) {
    if (error) {
        console.log("this is  a error message");
        console.error(error);
    } else {
        console.log(results);
        objects = results;
        console.log("testing");
    }
}