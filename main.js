function preload(){

}
function setup(){
canvas=createCanvas(500, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

}
function draw(){
image(video,100, 100, 300, 300);    
fill(0, 0, 255);
stroke(0, 0, 255);
rect(75, 20, 350, 30);
rect(35, 45, 30, 375);
rect(75, 450, 350, 30);
rect(450, 45, 30, 375);
fill(255, 0, 0);
stroke(255, 0, 0)
circle(30, 450, 100);
circle(30, 30, 100);  
circle(475, 30, 100);  
circle(475, 450, 100); 
}
function take_snapshot(){
save('student_name.png');
}