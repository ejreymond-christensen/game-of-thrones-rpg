$(document).ready(function() {

//model
  var character = [
    {"name": "Tyrion",
    "fullName": "Tyrion Lannister",
    "label": "tryrion",
    "photo": "assets/img/tyrion.jpeg",
    "status": "enemy",
    "healthPoint": 150,
    "attackPower": 10,
    "counterAttack": 10},

    {"name": "Jon",
    "fullName": "Jon Snow",
    "label": "jon",
    "photo": "assets/img/jon.jpeg",
    "status": "enemy",
    "healthPoint": 160,
    "attackPower": 14,
    "counterAttack": 14},

    {"name": "Daenerys",
    "fullName": "Daenerys Targaryen",
    "label": "daenerys",
    "photo": "assets/img/daenerys.jpeg",
    "status": "enemy",
    "healthPoint": 150,
    "attackPower": 17,
    "counterAttack": 17},

    {"name": "Jaime",
    "fullName": "Jaime Lannister",
    "label": "jaime",
    "photo": "assets/img/jamie.jpeg",
    "status": "enemy",
    "healthPoint": 145,
    "attackPower": 16,
    "counterAttack": 16},

    {"name": "Arya",
    "fullName": "Arya Stark",
    "label": "arya",
    "photo": "assets/img/arya.jpeg",
    "status": "enemy",
    "healthPoint": 120,
    "attackPower": 20,
    "counterAttack": 20},

    {"name": "Brienne",
    "fullName": "Brienne of Tarth",
    "label": "brienne",
    "photo": "assets/img/brienne.jpeg",
    "status": "enemy",
    "healthPoint": 140,
    "attackPower": 17,
    "counterAttack": 17},

    {"name": "Sandor",
    "fullName": "Sandor Clegane",
    "label": "hound",
    "photo": "assets/img/hound.jpeg",
    "status": "enemy",
    "healthPoint": 160,
    "attackPower": 12,
    "counterAttack": 12},

    {"name": "Melisandre",
    "fullName": "Melisandre",
    "label": "melisandre",
    "photo": "assets/img/melisandre.jpeg",
    "status": "enemy",
    "healthPoint": 200,
    "attackPower": 8,
    "counterAttack": 8},

    {"name": "Sansa",
    "fullName": "Sansa Stark",
    "label": "sansa",
    "photo": "assets/img/sansa.jpeg",
    "status": "enemy",
    "healthPoint": 180,
    "attackPower": 10,
    "counterAttack": 10},

    {"name": "Tormund",
    "fullName": "Tormund",
    "label": "tormund",
    "photo": "assets/img/tormund.jpeg",
    "status": "enemy",
    "healthPoint": 150,
    "attackPower": 12,
    "counterAttack": 10},

    {"name": "Cersei",
    "fullName": "Cersei Lannister",
    "label": "cersei",
    "photo": "assets/img/cersei.jpeg",
    "status": "enemy",
    "healthPoint": 130,
    "attackPower": 18,
    "counterAttack": 10},

    {"name": "Varys",
    "fullName": "Varys",
    "label": "varys",
    "photo": "assets/img/varys.jpeg",
    "status": "enemy",
    "healthPoint": 180,
    "attackPower": 7,
    "counterAttack": 7},
  ];


//global Variables
  var initalPlayerHealth = "";
  var playerHealth = "";
  var playerAttack = "";
  var playerCounterAttack = "";
  var defenderHealth ="";

  // function populates the choose character screen
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

  //These two function toggle between the two screens
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

  // onclick when chosing your player
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
    }
    chooseModal();
    $("#Modal").modal("show");
  });

  // this var and function load the R'Hllor hearts
  var hearts = '<img class ="heart" id="heart1" src="assets/img/rhllor.png">'+'<img class ="heart" id="heart2" src="assets/img/rhllor.png">'+'<img class ="heart" id="heart3" src="assets/img/rhllor.png">';

  var loadHearts = function(){
    $("#rhllor").append(hearts);
  };
  loadHearts();

  // function populates the fight screen
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

  // Load s the modal to choose enemy
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

  //loads the modal if win
  var winModal= function(){
    $("#modalImgs").empty();
    $("#modalImgs").append('<img id="winImg" src="assets/img/win.jpg">');
    $("#modalImgs").append('<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="location.reload();">Replay</button>');
    $(".modal-title").html("You are King of the Andals and the First Men");
  };
  //loads the modal if lose
  var loseModal= function(){
    $("#modalImgs").empty();
    $("#modalImgs").append('<img id="loseImg" src="assets/img/valar.jpg">');
    $("#modalImgs").append('<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="location.reload();">Replay</button>');
    $(".modal-title").html("Valar Morghulis");
  };

  // function for onlick battle
  var battle = function(){
    playerHealth = playerHealth - defenderAttack;
    defenderHealth = defenderHealth - playerAttack;
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
    for (var i = 0; i < character.length; i++) {
      if(character[i].status === "enemy"){
        deathCount++;
      }
    }
    if(deathCount === 0){
      winModal();
      $("#Modal").modal("show");
    }
  };

  $("body").on("click",'img.modalIcon', function(){
    var nchar = $(this).attr("id");
    for (var i = 0; i < character.length; i++) {
      if (nchar === character[i].label){
        character[i].status = "defender";
        populateBattleCharacters();
        showBattle();
      }
    }
  });

  //onclick for heart trigger
  $("body").on("click",'img.heart', function(){
    var x= $(this).attr("id");
    playerHealth= initalPlayerHealth;
    populateBattleCharacters();
    $("#"+x).hide();
  });

//onclick for battle attack
  $(".vs").on("click",'button.btn', function(){
    battle();
  });
});
