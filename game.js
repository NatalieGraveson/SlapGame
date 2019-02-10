let target = {
  name: "Regina",
  health: 100,
  hits: 0,
  items: {
    sweats: 3,
    pink: 5,
    shopping: 10
  },
  attacks: {
    kalteen: 1,
    cream: 5,
    bus: 25
  }
}

function attack(damagemethod) {
  target.health -= (target.attacks[`${damagemethod}`]);
  update()
}

function items(improvehealth) {
  target.health += (target.items[`${improvehealth}`]);
  update()

}

function reset() {
  target.health = 100;
  update()
}

function update() {
  if (target.health < 0) {
    target.health = 0
  } else if (target.health > 100) {
    target.health = 100
  }
  document.getElementById('health').innerText = target.health.toString();
}
  //draw()



//function draw()
