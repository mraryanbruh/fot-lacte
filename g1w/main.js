function setup(){
    canvas= createCanvas(550,551);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
      console.log(results)
    }
}

function modelLoaded(){
    console.log('poseNet is working')
}

function draw(){
    background('#0000FF')
}