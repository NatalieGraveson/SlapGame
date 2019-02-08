let health = 100;



function attack(damagemethod) {
  health -= (damagemethod);
  document.getElementById('health').innerText = health

}
function items(improvehealth) {
  health += (improvehealth);
  document.getElementById('health').innerText = health

}

function reset() {
  health = 100;
  document.getElementById('health').innerText = health
}
  //draw()



//function draw()
