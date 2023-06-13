video="";
function preload(){
 video=createVideo('video.mp4');
 video.hide();
 video.center();
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
}
function draw(){
    image(video,0,0,300,300);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Estado: detectando objetos";
}
function modelLoaded(){
    console.log("modelo cargado");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}