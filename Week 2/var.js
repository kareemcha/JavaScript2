var speed = 10;
var time = 5;
console.log(speed*time);

var speed1 = 39635;
var time1 = 37834;
console.log(speed1*time1);

var speed2 = 2;
var time2 = 20;
console.log(speed2*time2);

function showDistance (speed, time) {
    console.log(speed*time) ;
}

    showDistance(350, 768) ;
    showDistance(324,67777) ;
    showDistance(89, 1) ;

function getDistance (speed, time) {
    var distance = speed * time ;
    return distance ;
}

    var myDistance = showDistance(10, 5) ;