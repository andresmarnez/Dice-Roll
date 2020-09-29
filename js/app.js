/**
 * This function will genberate a random number and update de html
 * based on how many faces does the die contain.
 *
 * @param {int} face - A number
 * @return {boolean} Return true if it showed the number correctly
 *
 * @example
 * roll(20);
 *
 */

const roll = face => {
  var result = Math.floor(Math.random()*face + 1);
  let texto = document.querySelector("main");

  if(texto != null){
    texto.innerHTML = `<h1>${result}</h1>`;
    return true;
  }
  else return false;
}
