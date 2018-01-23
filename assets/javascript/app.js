// ***-=MODEL=-***

/* Each character comes with:
"name" - name of starwars character,
"photo" - local img file,
"status" - can be set to available (to chose), enemy (pool to fight), defendent (currently fighting), deceased (char has already been defeated) -- initial value is available;
"healthPoint" - HP of the character, can not be increased
"attackPower" - attack power will be incremented in each round by counterAttack
"counterAttack" - default is set to 1, if character is chosen counterAttack will = initial AttackPower
*/
var character = [
  {"name": "Rey",
  "label": "rey",
  "photo": "assets/img/rey.jpg",
  "status": "player",
  "healthPoint": "120",
  "attackPower": "8",
  "counterAttack": "1"},

  {"name": "Luke Skywalker",
  "label": "luke",
  "photo": "assets/img/luke.jpg",
  "status": "defender",
  "healthPoint": "50",
  "attackPower": "15",
  "counterAttack": "1"},

  {"name": "Boba Fett",
  "label": "fett",
  "photo": "assets/img/fett.jpg",
  "status": "enemy",
  "healthPoint": "90",
  "attackPower": "9",
  "counterAttack": "1"},

  {"name": "Darth Vader",
  "label": "vader",
  "photo": "assets/img/vader.jpeg",
  "status": "deadEnemy",
  "healthPoint": "100",
  "attackPower": "10",
  "counterAttack": "1"},

  {"name": "Kylo Ren",
  "label": "kylo",
  "photo": "assets/img/kylo.jpg",
  "status": "enemy",
  "healthPoint": "110",
  "attackPower": "7",
  "counterAttack": "1"},

  {"name": "Hans Solo",
  "label": "solo",
  "photo": "assets/img/solo.jpeg",
  "status": "enemy",
  "healthPoint": "60",
  "attackPower": "12",
  "counterAttack": "1"}
];


var populateAvailableChars = function(){
  for (var i = 0; i < character.length; i++) {
    $("#available").append(
      '<div class="col-md-2 col-sm-4">' +
        '<div class="card m-1 availableCard" id="'+character[i].label+'">' +
          '<img class="card-img-top" src="'+character[i].photo+'" alt="'+character[i].name+'">' +
          '<div class="card-body p-1">' +
            '<h5 class="playerName">'+character[i].name+'</h5>' +
            '<hr class="playerNameBreak">' +
            '<p class="playerStats">Health: '+character[i].healthPoint+'</p>' +
            '<p class="playerStats">Attack: '+character[i].attackPower+'</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }
};
populateAvailableChars();



var showBattle = function(){
  $("#available").css('display', 'none');
  $("#availableText").css('display', 'none');
  $("#gameWindow").css('display', 'flex');
};
var showSelection = function(){
  $("#available").css('display', 'flex');
  $("#availableText").css('display', 'flex');
  $("#gameWindow").css('display', 'none');
};




$(".availableCard").on("click", function(){
  var char = $(this).attr("id");
  for (var i = 0; i < character.length; i++) {
    if (char === character[i].label){
      character[i].status = "player";
    }
  }
  chooseModal();
  $("#Modal").modal("show");
});


var populateBattleCharacters = function(){
  for (var i = 0; i < character.length; i++){
    var card =
    '<div class="card m-1  '+character[i].status+'Card" id="'+character[i].label+'">' +
      '<img class="card-img-top" src="'+character[i].photo+'" alt="'+character[i].name+'">' +
      '<div class="card-body p-1">' +
        '<h5 class="playerName">'+character[i].name+'</h5>' +
        '<hr class="playerNameBreak">' +
        '<p class="playerStats">Health: '+character[i].healthPoint+'</p>' +
        '<p class="playerStats">Attack: '+character[i].attackPower+'</p>' +
        '<p class="playerStats text-right '+character[i].status+'Text"></p>' +
      '</div>' +
    '</div>';
    if (character[i].status === "player"){
      $("#player").append(card);
      $(".playerText").text("player");
    }
    else if (character[i].status === "defender") {
      $("#defender").append(card);
      $(".defenderText").text("current enemy");
    }
    else if (character[i].status === "enemy"){
      $("#enemies").prepend(card);
      $(".enemyText").text("waiting enemy");
    }
    else{
      $("#enemies").append(card);
      $(".deadEnemyText").text("dead enemy");
    }
  }
};
populateBattleCharacters();


var chooseModal = function(){
  for (var i = 0; i < character.length; i++){
    if (character[i].status === "enemy") {
      $("#modalImgs").append(
        '<div class= "col">' +
        '<img class= "modalIcon" src="'+character[i].photo+'" alt="'+character[i].name+'">' +
        '</div>'
      );
    }
  }
};
//Notes - to center div for active row- (mx-auto in row div)

// wrap everything in this so it only allows interaction after load...  $(document).ready(function() {

//$("#Modal").modal("show");
// data-status "player, enemy, dead" as a id element
