const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formDiv = document.querySelector('.control');

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
  attack,
  changeHP,
  renderHp,
  elHP,
}

player1.attack();

const player2 = {
  player: 2,
  name: 'Kitana Kitana ',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['leg', 'hand', 'fist'],
  attack,
  changeHP,
  renderHp,
  elHP,
  }
player2.attack();

const $ATTACK = ['head', 'body', 'foot'];

function enemyAttack() {
  const hit = ATTACK[mathRandom(0, 3)];
  const defence = ATTACK[mathRandom(0, 3)];
  console.log(this.name + ' Fight...')  
  return {
  value: mathRandom(0, HIT[hit]),
  hit,
  defence,
     }
  }

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }  
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div','life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');
    
    $life.style.width = playerObj.hp +'%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;  
}

function mathRandom() {
  const damage = Math.floor(Math.random()*20);
  return damage;
}

function elHP () {
  const $playerLife = document.querySelector('.player'+ this.player +' .life');
  return $playerLife;
};

function renderHP() {
  this.elHP().style.width = this.hp + '%';
  };

function changeHP (damage) {
  this.hp -= damage;
      if (this.hp < 0) {
          this.hp = 0;
      }
    };

function createReloadButton() {
  const $reloadWrap = createElement('div', 'reloadWrap');
  const $reloadButton = createElement( 'button', 'button');
  $reloadButton.innerText = 'Restart';
  $reloadWrap.appendChild($reloadButton);

  return $reloadWrap;
  }

function playerWins(name){
  const $loseTitle = createElement('div', 'loseTitle');
  if (player1.hp != player2.hp) {
    $loseTitle.innerText = name + ' wins';
  } else if (player1.hp === 0 && player2.hp === 0) {
    $loseTitle.innerText = 'Draw';
  }
  return $loseTitle;
}

$randomButton.addEventListener('click', function() {
  player1.changeHP(mathRandom);
  player2.changeHP(mathRandom);
  player1.renderHP();
  player2.renderHP();

  if (player1.hp === 0 || player2.hp === 0) {
    createReloadButton();
    $randomButton.disabled = true;
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWins(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWins(player1.name));
  } else if (player1.hp === player2.hp) {
    $arenas.appendChild(playerWins());
  }
})

$arenas.appendChild(createPlayer(player1)); 
$arenas.appendChild(createPlayer(player2)); 