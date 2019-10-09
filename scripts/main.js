
let pos = 0;
let score = 0;
function move(keycode){
	let speed = 10
	if(keycode == 37){
		pos -= speed;
		document.getElementById("player").style.marginLeft = pos+"px";
		document.getElementById("player2").style.marginLeft = pos+"px";
		//console.log("left");
	}
	else if(keycode == 39){
		pos += speed;
		//console.log(pos);
    	document.getElementById("player").style.marginLeft = pos+"px";
		document.getElementById("player2").style.marginLeft = pos+"px";
	}
}


function revert_fire(){
	document.getElementsByClassName("laser")[0].style.height = "30px";
	document.getElementById("player2").style.visibility = "hidden";
}

function get_aliens_cords(){
	var arr = new Array()
	var aliens = document.getElementsByClassName('aliens');
	for(var i = 0; i < aliens.length; i++){
		arr.push([Math.round(aliens[i].getBoundingClientRect().x),Math.round(aliens[i].getBoundingClientRect().x + (aliens[i].width))]);
	}
	return arr;
}


function fire(){
	document.getElementById("player2").style.visibility = "visible";
	document.getElementsByClassName("laser")[0].style.height = window.innerHeight+"px";
	//document.getElementsByClassName("laser")[0].style.height = 50+"px";
	document.getElementById("myAudio").play();
	//console.log("Laser x position"+document.getElementsByClassName('laser')[0].getBoundingClientRect().x);
	//console.log("Laser y position "+document.getElementsByClassName('laser')[0].getBoundingClientRect().y);
	var laser_pos = document.getElementsByClassName('laser')[0].getBoundingClientRect().x;
	cords = get_aliens_cords();
	/*if(cords.includes(Math.round(document.getElementsByClassName('laser')[0].getBoundingClientRect().x))){
		console.log("collision");
		score += 10;
		document.getElementById('score').innerHTML = score;
	}
	else{
		console.log(Math.round(document.getElementsByClassName('laser')[0].getBoundingClientRect().x));
		console.log(cords);
	}*/
  for(var i = 0; i < cords.length; i++){
    if(laser_pos >= cords[i][0] && laser_pos <= cords[i][1]){
      console.log("collision");
  		score += 10;
  		document.getElementById('score').innerHTML = score;
    }
    else{
  		console.log(laser_pos);
  		console.log(cords);
    }
  }
}


document.addEventListener("keydown", function (e){
	if(e.keyCode == 32){
		fire();
		window.setTimeout(function() { revert_fire() }, 100);
	}
});

document.addEventListener("keydown", function (e){
	move(e.keyCode);
});
