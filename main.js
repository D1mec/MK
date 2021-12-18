const $arenas = document.querySelector('.arenas');
//const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const player1 = {
  player: 1,
  name: 'Sonya Blade ',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['leg', 'hand', 'fist'],
  changeHP,
  renderHp,
  elHP,
  attack,
};


/**
 * 
 */
const player2 = {
  player: 2,
  name: 'Kitana Kitana ',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['leg', 'hand', 'fist'],
  changeHP,
  renderHp,
  elHP,
  attack,
  }

 function attack() {
  console.log(player.name + ' ' + 'Fight...');  
}
/**
 * 
 * @param {*} tag 
 * @param {*} className 
 * @returns 
 */
function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
      $tag.classList.add(className);
  }  
  return $tag;
}

function createReloadButton() {
  const $reloadWrap = createElement('div', 'reloadWrap');
  const $reloadButton = createElement( 'button', 'button');
  $reloadButton.innerText = 'Reload';
  $reloadWrap.appendChild.$reloadButton;

  reloadButton.addEventListener('click', function(){
    window.location.reload();
  });
  return $reloadWrap
}  

function createPlayer(player) {
    const $player = createElement('div', 'player' + player.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');
    
    

    $life.style.width = playerObject.hp +'%';
    $name.innerText = playerObject.name;
    $img.src = playerObject.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;  
}
/**
 * 
 * @param {*} name 
 * @returns 
 */
function playerLose(name){
  const $loseTitle = createElement('div', 'loseTitle');
  if (name) {
    $loseTitle.innerText = name + ' wins';
  } else { 
    $loseTitle.innerText = 'draw';
  }
  return $loseTitle;
}

function getRandom(num) {
  return Math.ceil(Math.random() * num) /* :20*/ ;
}

function changeHP(randomNumber) {
  this.hp -= randomNumber;
    if (this.hp <= 0) {
    this.hp = 0;
    }
};  

/**
 * 
 */
function elHP () {
  const $playerLife = document.querySelector('.player'+this.player+' .life');
  };


/**
 * 
 */
function renderHP() {
  this.elHP().style.width = this.hp + '%';
  };

$formFight.addEventListener('submit', function(e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const attack = {};

  for (let item of $formFight){
    if (item.checked && item.name === 'hit'){
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;}

    if (item.checked && item.name === 'defence'){
      attack.defence = item.value;
    }
    item.checked = false;
  }

 /**
 * 
 * @returns 
 */
function enemyAttack() {
  const hit = ATTACK[getRandom(3)-1];
  const defence = ATTACK[getRandom(3)-1];
  return{
    value: getRandom(HIT[hit]),
    hit,
    defence,
  }
  }
  $arenas.appendChild(createPlayer(player1)); 
  $arenas.appendChild(createPlayer(player2)); 
  

  console.log('####: a' , attack);
  console.log('####: e' , enemy);
  
} )



/*$randomButton.addEventListener('click', function() {
  player1.changeHP(getRandom(20));
  player1.renderHP();
  player2.changeHP(getRandom(20)); 
  player2.renderHP();

  if (player2.hp === 0 || player1.hp === 0) {
        $randomButton.disabled = true;
        createReloadButton();
  }
 
  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerLose(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerLose(player1.name));
  } else if (player2.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerLose());
  }
})*/


  