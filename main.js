video= "";
status="";

function preload(){

}

function setup(){
    video= createCapture(VIDEO);
    video.hide();
    canvas= createCanvas(380, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 380, 380);
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    object_name= document.getElementById("name_of_object").value;
}

function modelLoaded(){
    console.log("model is loaded");
    status= true;
}