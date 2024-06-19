noseX=0;
noseY=0;
function preload(){
    oculos = loadImage('oculos.webp');
}
    function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);}
    function modedlLoaded(){
        console.log('pão de queijo');
    }
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.Y;
        }
    }
function draw(){
    image(video, 0, 0, 300, 300);
    image(oculos, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save('a foto com filtro.png');
}