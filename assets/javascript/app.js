// ***-=MODEL=-***

/* Each character comes with:
"name" - name of starwars character,
"photo" - local img file,
"status" - can be set to available (to chose), enemy (pool to fight), defendent (currently fighting), deceased (char has already been defeated) -- initial value is available;
"healthPoint" - HP of the character, can not be increased
"attackPower" - attack power will be incremented in each round by counterAttack
"counterAttack" - default is set to 1, if character is chosen counterAttack will = initial AttackPower
*/
var characters = [
  {"name": "Rey" ,
  "photo": "assets/img/rey.jpg",
  "status": "available",
  "healthPoint": "120",
  "attackPower": "8",
  "counterAttack": "1"},

  {"name": "Luke Skywalker" ,
  "photo": "assets/img/luke.jpg",
  "status": "available",
  "healthPoint": "50",
  "attackPower": "15",
  "counterAttack": "1"},

  {"name": "Boba Fett" ,
  "photo": "assets/img/fett.jpg",
  "status": "available",
  "healthPoint": "90",
  "attackPower": "9",
  "counterAttack": "1"},

  {"name": "Darth Vader" ,
  "photo": "assets/img/vader.jpeg",
  "status": "available",
  "healthPoint": "100",
  "attackPower": "10",
  "counterAttack": "1"},

  {"name": "Kylo Ren" ,
  "photo": "assets/img/kylo.jpg",
  "status": "available",
  "healthPoint": "110",
  "attackPower": "7",
  "counterAttack": "1"},

  {"name": "Hans Solo" ,
  "photo": "assets/img/solo.jpeg",
  "status": "available",
  "healthPoint": "60",
  "attackPower": "12",
  "counterAttack": "1"}
];


//Notes - to center div for active row- (mx-auto in row div)
