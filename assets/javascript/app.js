$(document).ready(function() {

  var character = [
    {"name": "Tyrion",
    "fullName": "Tyrion Lannister",
    "label": "tryrion",
    "photo": "assets/img/tyrion.jpeg",
    "status": "enemy",
    "healthPoint": 190,
    "attackPower": 8,
    "counterAttack": 10},

    {"name": "Jon",
    "fullName": "Jon Snow",
    "label": "jon",
    "photo": "assets/img/jon.jpeg",
    "status": "enemy",
    "healthPoint": 50,
    "attackPower": 15,
    "counterAttack": 15},

    {"name": "Daenerys",
    "fullName": "Daenerys Targaryen",
    "label": "daenerys",
    "photo": "assets/img/daenerys.jpeg",
    "status": "enemy",
    "healthPoint": 90,
    "attackPower": 9,
    "counterAttack": 9},

    {"name": "Jaime",
    "fullName": "Jaime Lannister",
    "label": "jaime",
    "photo": "assets/img/jamie.jpeg",
    "status": "enemy",
    "healthPoint": 100,
    "attackPower": 10,
    "counterAttack": 10},

    {"name": "Arya",
    "fullName": "Arya Stark",
    "label": "arya",
    "photo": "assets/img/arya.jpeg",
    "status": "enemy",
    "healthPoint": 110,
    "attackPower": 7,
    "counterAttack": 1},

    {"name": "Brienne",
    "fullName": "Brienne of Tarth",
    "label": "brienne",
    "photo": "assets/img/brienne.jpeg",
    "status": "enemy",
    "healthPoint": 60,
    "attackPower": 12,
    "counterAttack": 1},

    {"name": "Sandor",
    "fullName": "Sandor Clegane",
    "label": "hound",
    "photo": "assets/img/hound.jpeg",
    "status": "enemy",
    "healthPoint": 60,
    "attackPower": 12,
    "counterAttack": 1},

    {"name": "Melisandre",
    "fullName": "Melisandre",
    "label": "melisandre",
    "photo": "assets/img/melisandre.jpeg",
    "status": "enemy",
    "healthPoint": 60,
    "attackPower": 12,
    "counterAttack": 1},

    {"name": "Sansa",
    "fullName": "Sansa Stark",
    "label": "sansa",
    "photo": "assets/img/sansa.jpeg",
    "status": "enemy",
    "healthPoint": 60,
    "attackPower": 12,
    "counterAttack": 1},

    {"name": "Tormund",
    "fullName": "Tormund",
    "label": "tormund",
    "photo": "assets/img/tormund.jpeg",
    "status": "enemy",
    "healthPoint": 60,
    "attackPower": 12,
    "counterAttack": 1},

    {"name": "Cersei",
    "fullName": "Cersei Lannister",
    "label": "cersei",
    "photo": "assets/img/cersei.jpeg",
    "status": "enemy",
    "healthPoint": 60,
    "attackPower": 12,
    "counterAttack": 1},

    {"name": "Grey Worm",
    "fullName": "Grey Worm",
    "label": "grey",
    "photo": "assets/img/grey.jpeg",
    "status": "enemy",
    "healthPoint": 60,
    "attackPower": 12,
    "counterAttack": 1}
  ];

  var initalPlayerHealth = "";
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
        initalPlayerHealth= character[i].healthPoint;

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

  var hearts = '<img class ="heart" id="heart1" src="assets/img/rhllor.png">'+'<img class ="heart" id="heart2" src="assets/img/rhllor.png">'+'<img class ="heart" id="heart3" src="assets/img/rhllor.png">';

  var loadHearts = function(){
    $("#rhllor").append(hearts);
  };
  loadHearts();

  var populateBattleCharacters = function(){
    $("#defender").empty();
    $("#enemies").empty();
    for (var i = 0; i < character.length; i++){
      var card =
      '<div class="card m-1 '+character[i].status+'Card" id="'+character[i].label+'">' +
        '<img class="card-img-top" src="'+character[i].photo+'" alt="'+character[i].name+'">' +
        '<div class="card-body p-1">' +
          '<h5 class="'+character[i].status+'Name">'+character[i].name+'</h5>' +
          '<hr class="playerNameBreak">' +
          '<div class="clearfix"><span class="playerStats" id="'+character[i].status+'HealthStat">HP: '+character[i].healthPoint+'</span>' +
          '<span class="playerStats" id="'+character[i].status+'AttackStat">A: '+character[i].attackPower+'</span></div>' +
          '<p class="playerStats text-right '+character[i].status+'Text"></p>' +
        '</div>' +
      '</div>';

      if (character[i].status === "player"){
        $(".playerText").text("player");
        $(".playerName").html(character[i].fullName);
        $("#playerHealthStat").text("Health: "+playerHealth);
        $("#playerAttackStat").text("Attack: "+playerAttack);
      }
      else if (character[i].status === "defender") {
        $("#defender").append(card);
        $(".defenderName").html(character[i].fullName);
        $(".defenderText").text("current enemy");
        defenderHealth= character[i].healthPoint;
        defenderAttack= character[i].attackPower;
        defender= character[i].label;
        $("#defenderHealthStat").text("Health: "+defenderHealth);
        $("#defenderAttackStat").text("Attack: "+defenderAttack);
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
          '<div class= "col-md-3">' +
          '<img class= "modalIcon" id="'+character[i].label+'" src="'+character[i].photo+'" alt="'+character[i].name+'" data-dismiss="modal">' +
          '</div>'
        );
      }
    }
  };

  var winModal= function(){
    $("#modalImgs").empty();
    $("#modalImgs").append('<img id="winImg" src="assets/img/win.jpg">');
    $("#modalImgs").append('<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="location.reload();">Replay</button>');
    $(".modal-title").html("You are King of the Andals and the First Men");
  };

  var loseModal= function(){
    $("#modalImgs").empty();
    $("#modalImgs").append('<img id="loseImg" src="assets/img/valar.jpg">');
    $("#modalImgs").append('<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="location.reload();">Replay</button>');
    $(".modal-title").html("Valar Morghulis");
  };


  var battle = function(){
    console.log("phealth: "+playerHealth);
    console.log("dhealth: "+defenderHealth);
    playerHealth = playerHealth - defenderAttack;
    console.log("phealth: "+playerHealth);
    defenderHealth = defenderHealth - playerAttack;
    console.log("dhealth: "+defenderHealth);
    playerAttack = playerAttack + playerCounterAttack;
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
    if (playerHealth <= 0){

      loseModal();
      $("#Modal").modal("show");
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

  $("body").on("click",'img.heart', function(){
    var x= $(this).attr("id");
    console.log(x);
    playerHealth= initalPlayerHealth;
    populateBattleCharacters();
    $("#"+x).hide();
  });

  $(".vs").on("click",'button.btn', function(){
    console.log("clickBattle");
    battle();
  });
});
//Notes - to center div for active row- (mx-auto in row div)

// wrap everything in this so it only allows interaction after load...  $(document).ready(function() {

//$("#Modal").modal("show");
// data-status "player, enemy, dead" as a id element
