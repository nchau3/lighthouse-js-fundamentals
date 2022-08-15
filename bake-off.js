const concat = function (array1, array2) {
  let combinedArray = [];
  if ((array1.length > 0) || (array2.length > 0)) {
    for (let i = 0; i <= array1.length - 1; i++) {
      combinedArray.push(array1[i]);
    }
    for (let i = 0; i <= array2.length - 1; i++) {
      combinedArray.push(array2[i]);
    }
  } return combinedArray;
}  

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let recipeMatch = '';
  let combinedIngredients = concat(bakeryA, bakeryB);
  for (recipe of recipes) {
    let ingredientsReq = 0;
    for (let i = 0; i < combinedIngredients.length; i++) {
      if ((combinedIngredients[i] === recipe.ingredients[0]) || (combinedIngredients[i] === recipe.ingredients[1]))
      ingredientsReq += 1;
    } if (ingredientsReq === 2) {
      recipeMatch = recipe.name;
      break;
    } else recipeMatch = 'No Match';
  } return recipeMatch;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese',];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese',]
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));