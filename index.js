debugger;
var prompt = require('prompt');

prompt.start();

var userHealth = 100;
var rations = 50;
var fifthSense = 0;

var zombieHealth = 20;

// var zombieDamage = userHealth - math.random 2- 5;
// var userDamage = zombieDamage  - math.random 2 - 5;

var day = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];
// 
// Get two properties from the user: username and email 
// 
prompt.get(['user', 'zombie', 'day'], function (err, result) {
  var zombieDay = Math.floor((Math.random() * 10) + 1);
  if (day === zombieDay) {
    zombieHealth -= 4;
  }
  else {
    userHealth -=5;
  }




  // 
  // Log the results. 
  // 
  console.log('Command-line input received:');
  console.log('user:' + result.user);
  console.log('zombie:' + result.zombie);
  console.log('day:' + result.day);
  console.log('zombieDay:' + zombieDay);
  console.log('zombieHealth:' + zombieHealth);
  console.log('userHealth:' + userHealth);

});


