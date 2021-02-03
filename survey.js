const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {

  rl.question('Whats your name? ', (name) => {

    rl.question('Favorite activity?', (activity) => {
      
      rl.question('Favorite meal?', (meal) => {

        rl.question('Favorute food?', (food) => {

          rl.question('Favorite activity post meal?', (postMealActivity) => {

            rl.question('Favorite sport?', (sport) => {

              let profile = `${name}s favorite activity is ${activity}. Their favorite meal is ${meal} and favorite food is ${food}. After food, 
              ${name} likes to ${postMealActivity}. If on an empty stomach, ${name} loves to play ${sport}.`
              
              console.log(profile)
              rl.close();

            });

          });
        });
      });
    });   
  });
});


