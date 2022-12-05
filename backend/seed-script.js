const axios = require("axios");


const run = async () => {
  const API_KEY = process.env.SPOONACULAR_API_KEY;
  const COUNT = 12;

  let i = 0;
  let output = [];

  while(i < COUNT) {
    const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);
    output.push({
      title: res.data.recipes[0].title,
      instructions: res.data.recipes[0].instructions,
      image: res.data.recipes[0].image,
      servings: res.data.recipes[0].servings,
      cuisines: res.data.recipes[0].cuisines,
    });

    i++;
  }

  console.log(output);
}


run();