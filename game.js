let target = {
  name: "Regina",
  health: 100,
  hits: 0,
  img: ['https://media.giphy.com/media/3o7aTJtkDTh8V5DGVi/giphy.gif', 'https://perezhilton.com/wp-content/uploads/2014/11/regina-george-neck-brace.gif', 'http://www.comedycentral.co.uk/sites/default/files/styles/image-w-520-h-520-scale/public/cc_uk/galleries/large/2016/09/26/butter.jpg?itok=6df1luVC', 'https://media.allure.com/photos/5bb518ac0273b82d6b15c5cb/3:4/w_1000,h_1334,c_limit/mean-girls-the-plastics-regina-george.jpg', 'http://www.quickmeme.com/img/f7/f7b47e8da8787c2422d0fe0734294696160e8f94857c3a221fac4c7b7961334c.jpg', 'https://media.tenor.com/images/555a788a4462b9e9e1e74fceaaea6b90/raw', 'https://assets1.roadtrippers.com/uploads/blog_post_section/attachment/image/156836/blog_post_section/attachment-image-48b16eaf-8d1c-4ee2-9ea7-cef08e8de285.jpg'],
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

  switch (damagemethod) {
    case 'kalteen':
      changePicture(2);
      break;
    case 'cream':
      changePicture(0);
      break;
    case 'bus':
      changePicture(1);
      break;
  }

  update()
}

function items(improvehealth) {
  target.health += (target.items[`${improvehealth}`]);

  switch (improvehealth) {
    case 'sweats':
      changePicture(4);
      break;
    case 'pink':
      changePicture(5);
      break;
    case 'shopping':
      changePicture(6);
      break;
  }
  update()

}

function reset() {
  target.health = 100;
  changePicture(3)
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



function changePicture(index) {
  document.getElementById('regina').src = target.img[index];
}
