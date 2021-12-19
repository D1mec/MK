const $arenas = document.querySelector('.arenas');
//const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const logs = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
      'Результат удара [playerWins]: [playerLose] - труп',
      '[playerLose] погиб от удара бойца [playerWins]',
      'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
      '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
      '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
      '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
      '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
      '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
      '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
      '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
      '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
      '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
      '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
      '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
      '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
      '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
      '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
      '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
      '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
      '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
      '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
      '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
      '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
      '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
      '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
      '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
      '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
  ],
  draw: 'Ничья - это тоже победа!'
};

const player1 = {
  player: 1,
  name: 'Sonya Blade ',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['leg', 'hand', 'fist'],
  changeHP,
  renderHP,
  elHP,
  attack,
};

const player2 = {
  player: 2,
  name: 'Kitana Kitana ',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['leg', 'hand', 'fist'],
  changeHP,
  renderHP,
  elHP,
  attack,
  }

 function attack() {
  console.log(player.name + ' ' + 'Fight...');  
}

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
  $reloadWrap.appendChild($ReloadButton);

  reloadButton.addEventListener('click', function(){
    window.location.reload();
  });
  return $reloadWrap
}  

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
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

function elHP () {
  return $playerLife = document.querySelector('.player'+this.player+' .life');
  };

function renderHP() {
  return this.elHP().style.width = this.hp + '%';
  };

function enemyAttack() {
  const hit = ATTACK[getRandom(3)-1];
  const defence = ATTACK[getRandom(3)-1];
  return{
    value: getRandom(HIT[hit]),
    hit,
    defence,
  }
  }
  
function playerAttack(){
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

return attack;
}

function showResult() {
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
}

/*function generateLogs(type, player1, player2) {
  const text = logs[type] [0].replace('[playerKick]', player1.name);
  console.log(text);
  
}*/

function generateLogs(type, player1, player2) {
  const date = new Date();
  console.log('####', type)
  const time = date.getHours() + ':' + date.getMinutes();
  switch (type) {
    case 'start':
      const start = logs['start'].replace('[player1]', player1.name).replace('[player2]', player2.name).replace('[time]', time);
      console.log(type);
      const elStart = `<p>${start}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elStart));
    case 'hit':
      const text = logs[type][0].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
      console.log(type);
      const el = `<p>${time}, ${text}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', el));
    case 'end':
      const end = logs['end'][0].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
      console.log(type);
      const elEnd = `<p>${time}, ${end}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elEnd));
    case 'draw':
      const draw = logs['draw'];
      console.log(type);
      const elDraw = `<p>${time}, ${draw}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elDraw));
  }

}

$formFight.addEventListener('submit', function(e) {
   e.preventDefault();
   const enemy = enemyAttack();
   const player = playerAttack();

   if (player.defence !== enemy.hit) {
     player1.changeHP(enemy.value);
     player1.renderHP();
     generateLogs('hit', player2, player1);
   }

   if (enemy.defence !== player.hit){
     player2.changeHP(player.value);
     player2.renderHP();
   }

   showResult();

   })

  $arenas.appendChild(createPlayer(player1)); 
  $arenas.appendChild(createPlayer(player2)); 
  

  console.log('####: a' , attack);
  console.log('####: e' , enemy);
  




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


  