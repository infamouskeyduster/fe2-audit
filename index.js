const audit = {

  exerciseA() {

    function fn() {
      console.log(this);
    }

    // What is the value of `this` when we call fn()?

    const result = 'global window object';

    return result;
  },








  exerciseB() {

    var data = {
      type: 'complex',
      verify: function() {
        return this.type;
      }
    };

    // What is the value of `this` when we call data.verify())?

    const result = 'data';

    return result;
  },








  exerciseC() {

    const dog = {
      totalBarks : 4,
      bark: () => {
        this.totalBarks++;
      }
    };

    // What is the value of `this` when we call dog.bark();

    const result = 'dog';

    return result;
  },








  exerciseD() {

    let greeting = 'welcome';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hey';
      }

      // Log A: greeting
      const newGreeting = ()  => {
        greeting = 'hi';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    // Log D: greeting
    greetingGenerator();

    const result = [{
      {'A': },
      {'B': },
      {'C': },
      {'D': },
    }];

    return result;
  },








  exerciseE() {

    var shoe = 'heel';
    // Log A:

    function putOnShoe() {
      shoe = 'boot';

      // Log B: shoe
    }

    // Log C: shoe
    putOnShoe();

    // Log D: shoe

    const result = [{
      {'A': },
      {'B': },
      {'C': },
      {'D': },
    }];

    return result;
  },








  exerciseF() {

    const restaurants = [
      {
        name: 'Beckon',
        capacity: 15,
        cuisine: 'New American',
        takeout: false,
        popular_dishes: ['beef', 'pork', 'seafood']
      },
      {
        name: 'El Five',
        capacity: 50,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['seafood', 'lamb', 'steak']
      },
      {
        name: 'ChoLon',
        capacity: 70,
        cuisine: 'Asian Fusion',
        takeout: true,
        popular_dishes: ['pork', 'beef', 'seafood']
      },
      {
        name: 'Super Mega Bien',
        capacity: 40,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['pork', 'duck', 'steak', 'seafood']
      }
    ];

    // Return an array of just the names of the restuarants:

    // e.g.
    // ['Beckon', 'El Five', 'ChoLon', 'Super Mega Bien']

    const result = restaurants.map(restaurant => restaurant.name);

    return result;
  },








  exerciseG() {

    const restaurants = [
      {
        name: 'Beckon',
        capacity: 15,
        cuisine: 'New American',
        takeout: false,
        popular_dishes: ['beef', 'pork', 'seafood']
      },
      {
        name: 'El Five',
        capacity: 50,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['seafood', 'lamb', 'steak']
      },
      {
        name: 'ChoLon',
        capacity: 70,
        cuisine: 'Asian Fusion',
        takeout: true,
        popular_dishes: ['pork', 'beef', 'seafood']
      },
      {
        name: 'Super Mega Bien',
        capacity: 40,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['pork', 'duck', 'steak', 'seafood']
      }
    ];

    // Return an array of objects that include just the name of the restaurant and whether takeout is available

    // e.g.
    // [
    //    { restaurant: 'Beckon', takeOut: false },
    //    { restaurant: 'El Five', takeOut: true },
    //    ..etc
    // ]

    const result = const result = restaurants.reduce((newRestaurants, currentRestaurant) => {
      newRestaurants.push({
        name: currentRestaurant.name,
        takeOut: currentRestaurant.takeout,
      });
      return newRestaurants;
    }, []);

    return result;
  },








  exerciseH() {

    const restaurants = [
      {
        name: 'Beckon',
        capacity: 15,
        cuisine: 'New American',
        takeout: false,
        popular_dishes: ['beef', 'pork', 'seafood']
      },
      {
        name: 'El Five',
        capacity: 50,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['seafood', 'lamb', 'steak']
      },
      {
        name: 'ChoLon',
        capacity: 70,
        cuisine: 'Asian Fusion',
        takeout: true,
        popular_dishes: ['pork', 'beef', 'seafood']
      },
      {
        name: 'Super Mega Bien',
        capacity: 40,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['pork', 'duck', 'steak', 'seafood']
      }
    ];

    // Return an object whose keys are the different restaurant cuisines and whose values are arrays of the restaurants

    // e.g.
    // {
    //    'New American': ['Beckon'],
    //    'Tapas/small plates': ['El Five', 'Super Mega Bien'],
    //    'Asian Fusion': ['ChoLon']
    // }

    const result =
    restaurants.reduce((restaurantsByCuisine, currentRestaurant) => {
      if (!restaurantsByCuisine[currentRestaurant.cuisine]) {
        restaurantsByCuisine[currentRestaurant.cuisine] = [];
      }
      restaurantsByCuisine[currentRestaurant.cuisine].push(currentRestaurant.name);
      return restaurantsByCuisine;
    }, {});

    return result;
  },

  exerciseBonus() {

    // There is a war and nobody knows - the alphabet war!
    // There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

    // Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return 'Left side wins!', when the right side wins return 'Right side wins!', in other case return 'Let's fight again!'.

    // The left side letters and their power:
    // w - 4
    // p - 3
    // b - 2
    // s - 1

    // The right side letters and their power:

    // m - 4
    // q - 3
    // d - 2
    // z - 1

    // All other letters don't have power and are only victims.

    // alphabetWar("z");        //=> Right side wins!
    // alphabetWar("zdqmwpbs"); //=> Let's fight again!
    // alphabetWar("zzzzs");    //=> Right side wins!
    // alphabetWar("wwwwwwz");  //=> Left side wins!


    // Fill out functionality below. Your result variable (line 320) is already set up and does not need to be modified

    function alphabetWar(fight) {
      const leftSideLetters = ['s', 'b', 'p', 'w'];
      const rightSideLetters = ['z', 'd', 'q', 'm'];
      let leftSideTotal = 0;
      let rightSideTotal = 0;
      let fightArray = Array.from(fight);

      fightArray.forEach(fightLetter => {
        if (leftSideLetters.includes(fightLetter)) {
          let index = Number(leftSideLetters.indexOf(fightLetter));
          leftSideTotal += index + 1;
        } else {
          let index = Number(rightSideLetters.indexOf(fightLetter));
          rightSideTotal += index + 1;
        }
      });

      if (leftSideTotal > rightSideTotal) {
        return 'Left side wins!';
      } else if (rightSideTotal > leftSideTotal) {
        return 'Right side wins!';
      } else if (leftSideTotal === rightSideTotal) {
        return `Let's fight again!`;
      }
    }


    const result = {
      one: alphabetWar('z'),
      two: alphabetWar('zdqmwpbs'),
      three: alphabetWar('zzzzs'),
      four: alphabetWar('wwwwwwz')
    };

    return result;
  }
};

module.exports = audit;
