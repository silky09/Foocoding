/* eslint-disable */

/* 
  Call this function to get a JSON string of the data
  (simulates calling a server to retrieve data)
*/

// Step 3: JSON parsing

/**
 * Create an HTML file
*  Insert a script tag that points to squirtle-sprites.js

*  In squirtle-sprites.js, call fetchPokemonData() and 
convert the JSON string it returns to a javascript object so you can access its properties

*  Display the sprite images (located in the parsed object) in the HTML page.
 You'll need to do some DOM manipulation kinda of stuff (maybe element.appendChild?)
 Bonus Challenge: Can you use an array method to loop over all sprites so you don't have to manually type each?
 * 
 * 
 */


function fetchPokemonData() {
  return '{"abilities":[{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3},{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1}],"base_experience":63,"forms":[{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-form/7/"}],"height":5,"held_items":[],"id":7,"is_default":true,"location_area_encounters":"https://pokeapi.co/api/v2/pokemon/7/encounters","name":"squirtle","order":10,"species":{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-species/7/"},"sprites":{"back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png","back_female":null,"back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png","back_shiny_female":null,"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png","front_female":null,"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png","front_shiny_female":null},"stats":[{"base_stat":43,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}},{"base_stat":64,"effort":0,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":50,"effort":0,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":65,"effort":1,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":48,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":44,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}}],"types":[{"slot":1,"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"}}],"weight":90}';
}

/* Code goes below */
//console.log(fetchPokemonData());

function addImg() {
  const obj = JSON.parse(fetchPokemonData());
  const picObj = obj.sprites;
  for (var i in picObj) {
    var myArray = /d(b+)d/g.exec(".png");
    if (picObj[i] != myArray) {
      const imageUrl = picObj[i];
      const img = document.createElement('img');
      img.src = imageUrl;
      document.body.appendChild(img);
    }
      
  }
}
window.onload = addImg;



