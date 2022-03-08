function setup() {
    video= createCapture(VIDEO);
    video.size(550,550);


    canvas= createCanvas(550, 550);
    canvas.position(700, 100);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  
}

function modelLoaded() {
     console.log('PoseNet is Initilized!');
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background('#A7C7E7');
}