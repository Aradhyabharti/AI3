video = ""
 status=""

function setup(){
    canvas=createCanvas(400,300)
    canvas.center()
    video = createCapture(400,300)
    video.center()
    video.hide()
}


function draw(){
    image(video,0,0,400,300)
}

function start(){
    od=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Detecting objects "
}


function modelLoaded(){
    console.log('model is loaded')
   status=true
}