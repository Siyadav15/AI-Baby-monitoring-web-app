status="";
objects=[];
function draw(){
    
    if(status=!""){
        
        r=random(255);
        g=random(255);
        b=random(255);
        for(i=0;i<objects.length[i];i++){
            document.getElementById("status").innerHTML="Status: Object detected...";
            stroke(r,g,b);
            fill(r,g,b);
            noFill();
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"% ",objects[i].x,objects[i].y);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            if(objects[i].label==person){
                document.getElementById("number_of_objects").innerHTML="Baby detected";
            }
            else{
                document.getElementById("number_of_objects").innerHTML="Baby not found"; 
            }

        }
        if(objects.length[i]<0){
            document.getElementById("number_of_objects").innerHTML="Baby not detected";
        }
    }
  
}
function preload(){
   image=loadImage("Fruit-basket.png"); 
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function modelLoaded(){
    console.log("Model loaded");
    status=true;
    objectDetector.detect(image, gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects...";
 
}
