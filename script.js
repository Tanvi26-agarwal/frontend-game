score = 0;
cross = true;

audiobg = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audiobg.play();
}, 1000); 
//windows.onload = function(){
  //       audiobg.play(); 
//}

document.onkeydown = function(e){                                             //adding ovement in the car(up arrow)
    console.log("key code is: ", e.keyCode)
    if (e.keyCode==38) {
        car = document.querySelector('.car');
        car.classList.add('animateCar');
        setTimeout(() => {
            car.classList.remove('animateCar')
        }, 700);

    }

    if (e.keyCode==39) {                                                      //left to right arrow
        car = document.querySelector('.car');
        carX = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
        car.style.left = carX + 112 + "px";

    }

    if (e.keyCode==37) {                                                                 //right to left arrow
        car = document.querySelector('.car');
        carX = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
        car.style.left = (carX - 112) + "px";

    }

}

setInterval(() => {
    car = document.querySelector('.car');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
                                                                         
       //collision timing set

   let cx = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));    
    let cy = parseInt(window.getComputedStyle(car, null).getPropertyValue('top'));

  let  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  let  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

   let offsetX = Math.abs(cx-ox);
   let offsetY = Math.abs(cy-oy);
    //console.log(offsetX, offsetY)
    if (offsetX<73 && offsetY<52) {
        gameover.innerHTML = "GAME OVER - Reload to Try Again";
        obstacle.classList.remove('obstacleDino')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audiobg.pause();
        }, 1000);
    }
    else if (offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross =true;
        }, 1000);

        //obstacle aimation increase timing
        setTimeout(() => {
        let    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
         let   newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New aniamtion duration: ', newDur)
        }, 500);
        

    }


}, 10);

function updateScore(score) {
    scorecont.innerHTML = "Your Score: " + score
}