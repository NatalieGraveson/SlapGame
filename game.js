let health = 100;
let gameover = 0;



function attack(damagemethod) {
  health -= (damagemethod);
  update()
}
function items(improvehealth) {
  health += (improvehealth);
  update()

}

function reset() {
  health = 100;
  update()
}

function update() {
  if (health < 0) {
    health = 0
  } else if (health > 100) {
    health = 100
  }
  document.getElementById('health').innerText = health
}
  //draw()



//function draw()
