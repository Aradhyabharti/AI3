video = ""
status = ""
object = []
percent = ""
function preload() {
    video = createVideo('video.mp4')
    video.hide()
}



function setup() {
    canvas = createCanvas(400, 300)
    canvas.center()
}


function draw() {
    image(video, 0, 0, 400, 300)
    if (status != "") {
        objectDetector.detect(video, gotResults)
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "status: object detected";
            document.getElementById("noofobjects").innerHTML = "no. of objects dectected are: " + object.length;
            fill("#ff0000")
            percent = floor(object[i].confidence * 100)
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15)
            noFill()
            stroke("#ff0000")
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
}

function start() {
    od = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Detecting objects "
}


function modelLoaded() {
    console.log('model is loaded')
    status = true
    video.loop()
    video.speed(1)
    video.volume(0)
}



function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
        object = results
    }
}