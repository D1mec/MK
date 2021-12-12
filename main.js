const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Sonya Blade ',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    attack: function(name) {
        console.log(name + ' ' + "Fight...");
    },
}

const player2 = {
    player: 2,
    name: 'Kitana Kitana ',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    attack: function(name) {
        console.log(name + ' ' + "Fight...");
    },
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

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.floor(Math.random()*20);
    $playerLife.style.width = player.hp + '%';
    console.log (player.name +' '+ player.hp +'%');
   
     if (player.hp < 0) {
        //player.hp = (player.hp > damage) ? player.hp - damage : 0
              $arenas.appendChild(playerLose(player.name));
            }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle
}

$randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);    
});

$arenas.appendChild(createPlayer(player1)); 
$arenas.appendChild(createPlayer(player2)); 


/* old 2 code
function createPlayer(classPlayer, playerObj) {
    const $player = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div')
    const $img = document.createElement('img');

    $player.classList.add(classPlayer);
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');

    $life.style.width = playerObj.hp +'%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $arenas.appendChild($player);    
}

createPlayer('player1', player1);
createPlayer('player2', player2); */

    /* oldest 1 version of code

    arenas.appendChild(div1);

    const div1 = document.createElement("div");
    div1.classList.add(player);

    div2 = document.createElement('div');
    div2.classList.add("progressbar");

    const life = document.createElement('div');
    life.classList.add("life");
    life.style.width = player.hp + "%";

    const name = document.createElement("div");
    name.classList.add("name");
    name.innerText = namePlayer.name;

    div3 = document.createElement("div");
    div3.classList.add("character");

    const img = document.createElement("img");
    img.src = namePlayer.img

    div2.appendChild(life);
    div2.appendChild(name);
    div3.appendChild(img);
    div1.appendChild(div2);
    div1.appendChild(div3);

   */
