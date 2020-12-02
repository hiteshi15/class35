var ball;
var database,position;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var locationnode  = database.ref("ball/position");
    locationnode.on("value", readop, showerror);
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function readop(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
    console.log("position of x", position.x);
    console.log("position of y", position.y);
}

function showerror(){
    console.log("error");
}


function writeposition(x,y){
    database.ref("ball/position").set({
        'x':position.x+x, 
        'y':position.y+y
    })
}

