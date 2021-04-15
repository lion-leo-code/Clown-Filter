noseX = 0;
noseY = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/Ssr84sd0/clownnose.png');
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(500, 205);
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function take_snapshot(){
    save('myFilterImg.png');
}
function draw(){
    image(video, 0, 0, 700, 500);
    image(clown_nose, noseX - 50, noseY -40, 100, 100);
}
function modelLoaded(){
    console.log("PoseNet Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

