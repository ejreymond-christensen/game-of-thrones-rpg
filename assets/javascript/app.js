//$(document).ready(function() {
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
  "status": "enemy",
  "healthPoint": "120",
  "attackPower": "8",
  "counterAttack": "1"},

  {"name": "Luke Skywalker",
  "label": "luke",
  "photo": "assets/img/luke.jpg",
  "status": "enemy",
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
  "status": "enemy",
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

var playerHealth = "";
var playerAttack = "";
var playerCounterAttack = "";
var defenderHealth ="";


var populateAvailableChars = function(){
  $("#available").empty();
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
  $(".gameWindow").css('display', 'flex');
};
var showSelection = function(){
  $("#available").css('display', 'flex');
  $("#availableText").css('display', 'flex');
  $(".gameWindow").css('display', 'none');
};


$(".availableCard").on("click", function(){
  var char = $(this).attr("id");
  for (var i = 0; i < character.length; i++) {
    if (char === character[i].label){
      character[i].status = "player";
      playerHealth= character[i].healthPoint;
      playerAttack= character[i].attackPower;
      playerCounterAttack= character[i].counterAttack;

      $("#player").append(
        '<div class="card m-1  '+character[i].status+'Card" id="'+character[i].label+'">' +
          '<img class="card-img-top" src="'+character[i].photo+'" alt="'+character[i].name+'">' +
          '<div class="card-body p-1">' +
            '<h5 class="playerName">'+character[i].name+'</h5>' +
            '<hr class="playerNameBreak">' +
            '<p class="playerStats" id="'+character[i].status+'HealthStat">Health: '+character[i].healthPoint+'</p>' +
            '<p class="playerStats" id="'+character[i].status+'AttackStat">Attack: '+character[i].attackPower+'</p>' +
            '<p class="playerStats text-right '+character[i].status+'Text"></p>' +
          '</div>' +
        '</div>'
      );
    }
    console.log(playerHealth);
    console.log(playerAttack);
    console.log(playerCounterAttack);
  }
  chooseModal();
  $("#Modal").modal("show");
});


var populateBattleCharacters = function(){
  var x= character[i];
  $("#defender").empty();
  $("#enemies").empty();
  for (var i = 0; i < character.length; i++){
    var card =
    '<div class="card m-1  '+character[i].status+'Card" id="'+character[i].label+'">' +
      '<img class="card-img-top" src="'+character[i].photo+'" alt="'+character[i].name+'">' +
      '<div class="card-body p-1">' +
        '<h5 class="playerName">'+character[i].name+'</h5>' +
        '<hr class="playerNameBreak">' +
        '<p class="playerStats" id="'+character[i].status+'HealthStat">Health: '+character[i].healthPoint+'</p>' +
        '<p class="playerStats" id="'+character[i].status+'AttackStat">Attack: '+character[i].attackPower+'</p>' +
        '<p class="playerStats text-right '+character[i].status+'Text"></p>' +
      '</div>' +
    '</div>';
    if (character[i].status === "player"){
      $(".playerText").text("player");
    }
    else if (character[i].status === "defender") {
      $("#defender").append(card);
      $(".defenderText").text("current enemy");
      defenderHealth= character[i].healthPoint;
      defenderAttack= character[i].attackPower;
      defender= character[i].label;
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
  $("#modalImgs").empty();
  for (var i = 0; i < character.length; i++){
    if (character[i].status === "enemy") {
      $("#modalImgs").append(
        '<div class= "col">' +
        '<img class= "modalIcon" id="'+character[i].label+'" src="'+character[i].photo+'" alt="'+character[i].name+'" data-dismiss="modal">' +
        '</div>'
      );
    }
  }
};

var winModal= function(){
  $("#modalImgs").append('<img id="winImg" src="">');
  $("#modalImgs").append('<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="location.reload();">Close</button>');
  $(".modal-title").html("You Win!");


};


var battle = function(){
  console.log("phealth: "+playerHealth);
  console.log("dhealth: "+defenderHealth);
  playerHealth = playerHealth - defenderAttack;
  console.log("phealth: "+playerHealth);
  defenderHealth = defenderHealth - playerAttack;
  console.log("dhealth: "+defenderHealth);
  playerAttack = playerAttack*2;
  $("#defenderHealthStat").text("Health: "+defenderHealth);
  $("#playerHealthStat").text("Health: "+playerHealth);
  $("#playerAttackStat").text("Attack: "+playerAttack);
  if (defenderHealth <= 0) {
    for (var i = 0; i < character.length; i++) {
      if (defender === character[i].label){
        character[i].status = "deadEnemy";
        chooseModal();
        $("#Modal").modal("show");
        winGame();
      }
    }
  }
};

var winGame = function(){
  var deathCount =0;
  console.log(deathCount);
  for (var i = 0; i < character.length; i++) {
    if(character[i].status === "enemy"){
      deathCount++;
      console.log(deathCount);
    }
  }
  if(deathCount === 0){
    console.log("you win");
    winModal();
    $("#Modal").modal("show");
  }
};

$("body").on("click",'img.modalIcon', function(){
  console.log("click");
  var nchar = $(this).attr("id");
  console.log(nchar);
  for (var i = 0; i < character.length; i++) {
    if (nchar === character[i].label){
      character[i].status = "defender";
      populateBattleCharacters();
      showBattle();
    }
  }
});

$(".vs").on("click",'button.btn', function(){
  console.log("clickBattle");
  battle();
});


//});
//Notes - to center div for active row- (mx-auto in row div)

// wrap everything in this so it only allows interaction after load...  $(document).ready(function() {

//$("#Modal").modal("show");
// data-status "player, enemy, dead" as a id element
